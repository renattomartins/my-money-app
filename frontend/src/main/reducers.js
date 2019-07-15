import { combineReducers } from 'redux'

import DashboardReducer from '../reduxDashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer
