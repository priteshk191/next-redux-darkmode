import React from "react";
import { Provider } from "react-redux";
import store from "../Redux/store";
import "../style/theme.css";
import "../style/style.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
