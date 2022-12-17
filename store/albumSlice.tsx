import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getMusicData from "../pages/api/album";
import { RootState } from "../pages/_app";

export interface MusicDataProps {
  "im:name": {
    label: string;
  };
  "im:image": {
    label: string;
    attributes: {
      height: string;
    };
  }[];
  "im:itemCount": {
    label: string;
  };
  "im:price": {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  "im:contentType": {
    "im:contentType": {
      attributes: {
        term: string;
        label: string;
      };
    };
    attributes: {
      term: string;
      label: string;
    };
  };
  "im:artist": {
    label: string;
    attributes: {
      href: string;
    };
  };
  "im:releaseDate": {
    label: string;
    attributes: {
      label: string;
    };
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };
  id: {
    label: string;
    attributes: {
      "im:id": string;
    };
  };
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
}
interface AlbumDataProps {
  feed: object;
  entry: MusicDataProps[];
}
interface AlbumProps {
  loading: boolean;
  album: AlbumDataProps | object;
  error: object;
  searchValue: string;
}
const initialState: AlbumProps = {
  loading: false,
  album: {
    entry: [
      {
        "im:name": { label: "" },
        "im:image": [
          {
            label: "",
            attributes: { height: "" },
          },
          {
            label: "",
            attributes: { height: "" },
          },
          {
            label: "",
            attributes: { height: "" },
          },
        ],
        "im:itemCount": { label: "" },
        "im:price": {
          label: "",
          attributes: { amount: "", currency: "" },
        },
        "im:contentType": {
          "im:contentType": {
            attributes: { term: "", label: "" },
          },
          attributes: { term: "", label: "" },
        },
        rights: {
          label: "",
        },
        title: { label: "" },
        link: {
          attributes: {
            rel: "",
            type: "",
            href: "",
          },
        },
        id: {
          label: "",
          attributes: { "im:id": "" },
        },
        "im:artist": {
          label: "",
          attributes: {
            href: "",
          },
        },
        category: {
          attributes: {
            "im:id": "",
            term: "",
            scheme: "",
            label: "",
          },
        },
        "im:releaseDate": {
          label: "",
          attributes: { label: "" },
        },
      },
    ],
  },
  searchValue: "",
  error: {},
};

export const getAlbum = createAsyncThunk("album/getAlbum", getMusicData);

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    addsearch: (state, { payload }) => {
      state.searchValue = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAlbum.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAlbum.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.album = payload.feed;
      })
      .addCase(getAlbum.rejected, (state, err) => {
        state.loading = false;
        state.error = err.error;
      });
  },
});

export const selectAlbum = (state: RootState | any) => state.albumData.album;
