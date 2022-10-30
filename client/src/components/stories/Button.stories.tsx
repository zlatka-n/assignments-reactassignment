import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import { action } from "@storybook/addon-actions";
import { TrashIcon } from '@radix-ui/react-icons';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    onClick: action("delete todo"),
    icon: <TrashIcon />,
};