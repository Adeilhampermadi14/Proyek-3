import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import Cookie from "js-cookie";
const initialState = {
  userses: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
const alertInitial = {
  show: null,
  status: null,
  message: null,
  sessionExp:null
};
const initialStateLogin = {
  isError: false,
  isSuccessLogin: false,
  isLoading: false,
  messageLogin: "",
};
const initialMore = {
  MoreClick: null,
};

export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        {
          username: user.username,
          password: user.password,
        }
      );
      Cookie.set("accessToken", response.data.data.token, { expires: 6000000 });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data;
        return thunkAPI.rejectWithValue(message);
      }
      if (error.request) {
        return thunkAPI.rejectWithValue({
          message: "Sepertinya ada gangguan dari server",
        });
      }
    }
  }
);

export const UserSess = createAsyncThunk(
  "user/UserSess",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile`,
        { headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` } }
      );
     
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    // user sess
    builder
      .addCase(UserSess.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UserSess.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.userses = action.payload;
      })
      .addCase(UserSess.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

const authSliceLogin = createSlice({
  name: "authLogin",
  initialState: {
    isError: false,
    isSuccessLogin: false,
    isLoading: false,
    messageLogin: "",
  },
  reducers: {
    resetStateLogin: (state) => initialStateLogin,
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessLogin = true;
        state.userses = action.payload;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.messageLogin = action.payload;
      });
  },
});

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    clickStatus: {
      HomeIsClicked: false,
      ReportIsClicked: false,
      ResourceIsClicked: false,
      RequestIsClicked: false,
    },
  },
  reducers: {
    setClickStatus: (state, action) => {
      state.clickStatus = action.payload;
    },
  },
});

const AlertSlice = createSlice({
  name: "alertSlice",
  initialState: {
    show: null,
    status: null,
    message: null,
    sessionExp:null
  },
  reducers: {
    resetAlert: (state) => alertInitial,
    setAlert: (state, action) => {
      state.show = action.payload.show;
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.sessionExp = action.payload.session;
    },
  },
});

const MoreSlice = createSlice({
  name: "moreSlice",
  initialState: {
    MoreClick: null,
  },
  reducers: {
    resetMore: (state) => initialMore,
    setMore: (state, action) => {
      state.MoreClick = action.payload;
    },
  },
});
const PanelSlice = createSlice({
  name: "panelSlice",
  initialState: {
    PanelClick: true,
  },
  reducers: {
    resetPanel: (state) => {state.PanelClick = true},
    setPanel: (state, action) => {
      state.PanelClick = action.payload;
    },
  },
});
const SearchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    SearchResult: "",
  },
  reducers: {
    resetSearch: (state) => {state.SearchResult = null},
    setSearch: (state, action) => {
      state.SearchResult = action.payload;
    },
  },
});
export const { setClickStatus } = sidebarSlice.actions;
export const { reset } = authSlice.actions;
export const { resetSearch,setSearch } = SearchSlice.actions;
export const { resetPanel,setPanel} = PanelSlice.actions;
export const { resetStateLogin } = authSliceLogin.actions;
export const { resetAlert, setAlert } = AlertSlice.actions;
export const { resetMore, setMore } = MoreSlice.actions;
export { authSlice,PanelSlice, sidebarSlice, SearchSlice, authSliceLogin, AlertSlice, MoreSlice };
