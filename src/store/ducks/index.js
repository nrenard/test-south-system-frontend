import { combineReducers } from "redux";

import dragons from "./dragons";
import user from "./user";

export default combineReducers({ user, dragons });
