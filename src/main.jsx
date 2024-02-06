import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider,

} from 'react-query'

import { BrowserRouter } from "react-router-dom";
import GlobalProvider from "./context/GlobalState";
import { store } from './app/store'
import { Provider } from 'react-redux'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <React.StrictMode>
      <QueryClientProvider client={ queryClient}>
      <BrowserRouter>
      <Provider store={store}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
      </Provider>
      </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
);
