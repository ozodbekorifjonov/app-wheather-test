import {createSlice} from '@reduxjs/toolkit'
import {toast} from "react-toastify";
import {DataByDay} from "../components/general";

export const initialState = {
    loading: false,
    hasErrors: false,
    weatherData: [],
    searchResult: ""
}

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        getRecipes: state => {
            state.loading = true
        },
        getRecipesSuccess: (state, action) => {
            state.weatherData = action.payload
            state.loading = false
            state.hasErrors = false
        },
        getRecipesFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
        getCityName: (state, {payload}) => {
            state.searchResult = payload
        }
    },
})

export const {getRecipes, getRecipesSuccess, getRecipesFailure, getCityName} = recipesSlice.actions

export const recipesSelector = state => state.recipes

export default recipesSlice.reducer

export function fetchWeatherData(cityName) {

    return async dispatch => {

        dispatch(getRecipes())

        const apiKey = process.env.API_KEY;

        try {

            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`)

            const response = await api_call.json();

            const data = await response;

            if (response.cod === "404") {
                toast.error(response.message)
            } else {
                dispatch(getRecipesSuccess(DataByDay(data)))
                dispatch(getCityName(cityName))
            }

        } catch (error) {
            dispatch(getRecipesFailure(error))
        }
    }
}
