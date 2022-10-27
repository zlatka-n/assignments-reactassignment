## Tasks
Using provided UI pure components do following:

1) Fix layout of non-empty `List` component
1) Modify `Footer` to show 0 when no value(s) were passed
1) Fix Layout component so the `Footer` is always attached to its bottom; Add story/stories for `Layout` component
1) Style `Header` so the button is aligned on the right
1) Style `ListItem` so action buttons are aligned on the right
1) Style `ListItem` so the action buttons are only visible when hovering over the item; Add story showing that state
1) Fix all bugs and visual imperfections you find
1) Load items from API
1) After button in header is clicked, show `Form` component in the `Header` instead of the clicked button. If the Form is submitted, a new list should be saved on backend and list of all items updated
1) When edit button on todo item is clicked, the row should be replaced by the `Form` component (same as for creating new todo item)
1) Implement removing todo item
1) Implement saving "checked" state of a todo item when changed
1) Sort list of todo items so the _done_ (=checked) items are on the bottom; next sort items by creating date, descending
1) Show number of todo/done items in `Footer`
1) Persist all changes, additions and removals of todo items on server using API calls
1) Create a `Button` component and use it instead of all `button` html elements

Other notes:
- feel free to do any other visual modifications that - in your opinion - makes it looking nicer
- do not use any component library like Material UI; do not use Tailwind.
- do not modify API (props) of provided components unless achieving required tasks would not be possible otherwise
- feel free to install and use any public package you may need

## Advanced tasks
- modify the `Form` component (and related ones if needed) so the form field handles not only string, but also number and treat empty string input as `undefiened`  
