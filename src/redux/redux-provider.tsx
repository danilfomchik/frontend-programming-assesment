import { Provider } from "react-redux";

import store from "./store";
import { ReduxProviderProps } from "./types";

const ReduxProvider = ({ children }: ReduxProviderProps) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
