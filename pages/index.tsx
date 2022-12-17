import { useSelector } from "react-redux";
import getStore from "../store";
import { getAlbum, selectAlbum } from "../store/albumSlice";

const Home = () => {
  const album = useSelector(selectAlbum)
  
  return <div>
        {album?.title?.label}
  </div>;
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
