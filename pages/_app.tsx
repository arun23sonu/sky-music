import { Provider } from "react-redux";
import { AppProps } from "next/dist/shared/lib/router/router";
import getStore from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const store = getStore(pageProps.initialState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
