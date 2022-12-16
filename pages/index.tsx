import Head from "next/head";
import getStore from "../store";
import { getAlbum } from "../store/albumSlice";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Sky Music</title>
        <meta
          name="description"
          content="Listen to latest Music for FREE and download MP3 songs online in HD quality. Stream 20 Million+ New & Popular MP3 songs in 14+ languages only on Sky Music."
        />
        <link rel="icon" href="/sky.png" />
      </Head>
    </div>
  );
};
export type RootState = ReturnType<typeof getStore>;

export const getServerSideProps = async () => {
  const store = getStore();
  await store.dispatch(getAlbum());
  return {
    props: {
      initialState: store.getState(),
    },
  };
};

export default Home;
