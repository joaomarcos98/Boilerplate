import { Main } from ".";

type ArgsProps = {
    title: string;
    description: string;
};

export default {
    title: "Main",
    component: Main
};

const Template = (args: ArgsProps) => <Main {...args} />;

export const Basic = Template.bind({});
