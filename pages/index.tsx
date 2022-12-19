import AlbumSection from "../components/AlbumSection/AlbumSection";
import Footer from "../components/Footer/Footer";
import getStore from "../store";
import { getAlbum } from "../store/albumSlice";

const Home = () => {
  return (
    <div>
      <AlbumSection />
      <Footer/>
    </div>
  );
};

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
