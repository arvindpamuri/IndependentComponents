import React from 'react';

import { DevButton } from './devButton';

export default {
  component: DevButton,
  title: 'DevButton',
};

const Template = (args) => <DevButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Default',
    variant: 'default'    
};

export const Outline = Template.bind({});
Outline.args = {
    title: 'Outline',
    variant: 'outline'

}

export const Text = Template.bind({});
Text.args = {
    title: 'Text',
    variant: 'text',
    boxShadowDisabled: true
}

export const BoxShadowEnabled = Template.bind({});
BoxShadowEnabled.args = {
    enableBoxShadow: true
}

export const BoxShadowDisabled = Template.bind({});
BoxShadowDisabled.args = {
    enableBoxShadow: false
}

