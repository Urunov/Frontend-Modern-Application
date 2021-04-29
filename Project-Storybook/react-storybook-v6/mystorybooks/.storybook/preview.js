
import React from 'react'
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core'
import Center from "../src/components/Center/Center";
import {addDecorator, addParameters} from "@storybook/react";
import {withConsole} from "@storybook/addon-console";
import {withKnobs} from "@storybook/addon-knobs";
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";
import {withA11y} from "@storybook/addon-a11y";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    }
}

export const decorators = [(Story) => (
    <ThemeProvider theme={theme}>
        <CSSReset />
        <Center>
        <Box m='4'>
            <Story />
        </Box>
        </Center>
    </ThemeProvider>
)]

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(withKnobs)
addDecorator(withA11y)

addParameters(
    {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        },
    })

