import { configureStore } from '@reduxjs/toolkit'
import {AlertSlice, MoreSlice, PanelSlice, SearchSlice, authSlice,authSliceLogin,sidebarSlice} from '../Features/AuthSlice'

const Store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    sidebar: sidebarSlice.reducer,
    authLogin: authSliceLogin.reducer,
    alertSlice:AlertSlice.reducer,
    moreSlice:MoreSlice.reducer,
    panelSlice:PanelSlice.reducer,
    searchSlice:SearchSlice.reducer
  },
});


  export default Store