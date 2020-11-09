import React from 'react';

import { DevButton } from './devButton';

export default {
  component: DevButton,
  title: 'DevButton',
};

const Template = (args) => <DevButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: 'default'    
};

export const Outline = Template.bind({});
Outline.args = {
    variant: 'outline'

}

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
    boxShadowDisabled: true
}

export const BoxShadowEnabled = Template.bind({});
BoxShadowEnabled.args = {
    boxShadow: true
}

export const BoxShadowDisabled = Template.bind({});
BoxShadowDisabled.args = {
    boxShadow: false
}

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
}


export const LeftIcon = Template.bind({});
LeftIcon.args = {
    iconPosition: 'left'
}

export const RightIcon = Template.bind({});
RightIcon.args = {
    iconPosition: 'right'
}

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary'
}

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary'
}

export const Danger = Template.bind({});
Danger.args = {
    color: 'danger'
}

export const Small = Template.bind({});
Small.args = {
    title: 'small',
    size: 'sm'
}

export const Medium = Template.bind({});
Medium.args = {
    title: 'medium',
    size: 'md'
}

export const Large = Template.bind({});
Large.args = {
    title: 'large',
    size: 'lg'
}

