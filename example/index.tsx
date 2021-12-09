import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { BootAlert } from "../src";

const App = () => {
    return (
        <BootAlert variant="danger">
            <div>Test</div>
        </BootAlert>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
