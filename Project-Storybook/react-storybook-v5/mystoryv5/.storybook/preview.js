import {addDecorator} from "@storybook/react";
import Center from "../src/components/Center/Center";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// addDecorator(story=> <Center>{story()}</Center>)