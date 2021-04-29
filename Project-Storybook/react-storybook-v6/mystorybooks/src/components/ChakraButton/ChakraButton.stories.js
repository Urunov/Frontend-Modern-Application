import React from 'react'
import { Button } from '@chakra-ui/core'
import {text, boolean} from "@storybook/addon-knobs";

export default {
    title: 'Chakra/Button',
    component: Button,
    argTypes: { onClick: { action: 'clicked' } }
}

const Template =  args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
    variantColor: 'green',
    children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
    variantColor: 'red',
    children: 'Danger'
}

export const Primary = Template.bind({})
let onClick;
Primary.args = {
    variantColor: 'blue',
    children: 'Primary'
}

// export const Log =() => (
//     <Button variantColor='blue' onClick={() => console.log('Button clicked')}> Log </Button>
// )

export const Knobs = () => (
    <Button variantColor='purple' onClick={()=> console.log('Button click', process.env.STORYBOOK_THEME)}
            disabled={boolean('Disabled', false)}>
        {text(' Label', 'Button Label')}
    </Button>
)