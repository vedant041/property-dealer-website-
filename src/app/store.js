import { configureStore } from "@reduxjs/toolkit"

import authReducer from "../redux/authSlice"
import investorReducer from "../redux/investorSlice"
import shareReducer from "../redux/shareSlice"
import dashboardReducer from "../redux/dashboardSlice"
import propertiesReducer from "../redux/propertiesSlice"
import propertyReducer from "../redux/propertySlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    investor: investorReducer,
    shares: shareReducer,
    dashboard: dashboardReducer,
    properties: propertiesReducer,
    property: propertyReducer
  }
})

export default store