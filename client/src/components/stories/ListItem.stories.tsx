import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ListItem } from "../ListItem";
import { action } from "@storybook/addon-actions";

export default {
    title: "List Item",
    component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const ToDo = Template.bind({});
ToDo.args = {
    label: "Lorem ipsum dolor",
    handleRemoval: action("Item removed"),
    handleEdit: action("Item edit required"),
};

export const Done = Template.bind({});
Done.args = {
    ...ToDo.args,
    checked: true,
};
