import {createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {toast} from "react-toastify";
import {DataByDay} from "../components/general";

export const initialState = {
    loading: false,
    hasErrors: false,
    weatherData: [],
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
    },
})

export const {getRecipes, getRecipesSuccess, getRecipesFailure} = recipesSlice.actions

export const recipesSelector = state => state.recipes

export default recipesSlice.reducer

export function fetchWeatherData(cityName) {

    return async dispatch => {
        dispatch(getRecipes())

        const apiKey = '64e111b1726c825d52b5f5152dc2d052';

        try {

            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`)

            const response = await api_call.json();

            const data = await response;

            if (response.cod === "404") {
                toast.error(response.message)
            } else {
                dispatch(getRecipesSuccess(DataByDay(data)))
            }

        } catch (error) {
            dispatch(getRecipesFailure(error))
        }
    }
}
