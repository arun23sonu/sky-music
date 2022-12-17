import { Provider } from "react-redux";
import "../styles/globals.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import getStore from "../store";
import Header from "../components/Header/Header";
import MetaTags from "../shared/utils/components/MetaTags/MetaTags";

function MyApp({ Component, pageProps }: AppProps) {
  const store = getStore(pageProps.initialState);
  return (
    <Provider store={store}>
      <MetaTags />
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
export type RootState = ReturnType<typeof getStore>;


export default MyApp;
