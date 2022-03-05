import { GlobalStyles } from "../src/styles/global";

const withGlobalStyles = (storyFn: Function) => (
    <>
        <GlobalStyles />
        {storyFn()}
    </>
)

export default withGlobalStyles;
