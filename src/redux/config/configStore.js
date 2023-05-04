// export default store;
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../modules/todo";
const store = configureStore({
  reducer: {
    authSlice,
  },
  // 추가 구성 옵션
});

export default store;
