import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import AppRouting from "./routing/AppRouting";
import AppProvider from "./hooks";

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <BrowserRouter>
            <AppProvider>
                <AppRouting/>
            </AppProvider>
        </BrowserRouter>
    </StrictMode>
);