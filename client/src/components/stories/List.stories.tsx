import { ComponentMeta, ComponentStory } from "@storybook/react";

import { List } from "../List";
import { ListItem, LiteItemProp } from "../ListItem";
import { action } from "@storybook/addon-actions";

export default {
    title: "List",
    component: List,
    subcomponents: { ListItem },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

const emptyHandlers: Pick<LiteItemProp, "handleEdit" | "handleRemoval"> = {
    handleRemoval: action("Removal requested"),
    handleEdit: action("Edit requested"),
};

export const WithItems = Template.bind({});
WithItems.args = {
    children: [
        <ListItem {...emptyHandlers} label={"Lorem ipsum dolor"} />,
        <ListItem {...emptyHandlers} label={"Nullam Adipiscing Ridiculus Fusce"} />,
        <ListItem {...emptyHandlers} label={"Mattis Tristique Parturient "} />,
    ],
};
