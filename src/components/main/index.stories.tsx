import { Meta, Story } from "@storybook/react/types-6-0";
import { Main } from ".";

export default {
    title: "Main",
    component: Main,
    args: {
        title: "Title Default",
        description: "Description Default"
    }
} as Meta;

export const Template: Story = (args) => <Main {...args} />;
// Template.args = {
//     title: "oi",
//     description: "ola"
// };
// export const Basic = Template.bind({});
