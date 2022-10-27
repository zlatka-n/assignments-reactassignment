import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Header } from "../Header";
import { action } from "@storybook/addon-actions";

export default {
    title: "Header",
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({ children, ...args }) => <Header {...args}>{children}</Header>;

export const Default = Template.bind({});
Default.args = {
    children: "Headline title",
    handleAddItem: action("Header button clicked"),
};
