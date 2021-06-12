import {createSlice} from '@reduxjs/toolkit'
import {toast} from "react-toastify";
import {DailyForecast} from "../components/general";

export const initialState = {
    loading: false,
    hasErrors: false,
    dailyData: [],
}

const dailySlice = createSlice({
    name: 'daily',
    initialState,
    reducers: {
        getDaily: state => {
            state.loading = true
        },
        getDailySuccess: (state, action) => {
            state.dailyData = action.payload
            state.loading = false
            state.hasErrors = false
        },
        getDailyFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
        clearDailyData: state => {
            state.dailyData = [];
        }
    },
})

export const {getDaily, getDailySuccess, getDailyFailure, clearDailyData} = dailySlice.actions

export const dailySelector = state => state.daily

export default dailySlice.reducer

export function fetchDailyData(cityName, req) {

    return async dispatch => {
        dispatch(getDaily())

        const apiKey = process.env.API_KEY;

        try {

            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`)

            const response = await api_call.json();

            const data = await response;

            if (response.cod === "404") {
                toast.error(response.message)
            } else {
                dispatch(getDailySuccess(DailyForecast(data, req)))
            }

        } catch (error) {
            dispatch(getDailyFailure(error))
        }
    }
}
