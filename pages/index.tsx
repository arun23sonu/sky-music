import { useSelector } from "react-redux";
import AlbumSection from "../components/AlbumSection/AlbumSection";
import AlbumTile from "../shared/utils/components/AlbumTile/AlbumTile";
import getStore from "../store";
import { getAlbum, selectAlbum } from "../store/albumSlice";
import { RootState } from "./_app";

const Home = () => {
  const album = useSelector(selectAlbum)
  console.log(album);
  const { favorite } = useSelector(
    (state: RootState | any) => state.albumData
  );
  const { searchValue } = useSelector(
    (state: RootState | any) => state.albumData
  );
  return ( <div>
<AlbumSection/>
</div>);
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
