import { combineReducers } from "redux";
import themeSlice from "../style/theme/themeSlice";

const rootReducer = combineReducers({
  theme: themeSlice,
});

export default rootReducer;
