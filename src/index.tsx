import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import AppRouting from "./routing/AppRouting";
import AppProvider from "./hooks";

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <BrowserRouter>
            <AppProvider>
                <AppRouting/>
            </AppProvider>
        </BrowserRouter>
    </StrictMode>
);