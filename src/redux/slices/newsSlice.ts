import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getHeadlines, getFeatured } from '../api/newsApi'
import { AppThunk } from '../store'
import { IState } from './interface'

const initialState = {
  headlines: [],
  featured: [],
  isLoading: false,
  error: null,
} as IState

const news = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getHeadlinesStart(state) {
      state.isLoading = true
      state.error = null
    },
    getHeadlinesSuccess(state, action: PayloadAction<[]>) {
      state.isLoading = false
      state.headlines = action.payload
    },
    getHeadlinesFailure(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    getFeaturedStart(state) {
      state.isLoading = true
      state.error = null
    },
    getFeaturedSuccess(state, action: PayloadAction<[]>) {
      state.isLoading = false
      state.featured = action.payload
    },
    getFeaturedFailure(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {
  getHeadlinesStart,
  getHeadlinesSuccess,
  getHeadlinesFailure,
  getFeaturedStart,
  getFeaturedSuccess,
  getFeaturedFailure,
} = news.actions
export default news.reducer

export const fetchHeadlines = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getHeadlinesStart())
    const data = await getHeadlines()
    dispatch(getHeadlinesSuccess(data))
  } catch (err) {
    let errorMessage = 'Unable to get the News!'
    const error = await err.response.json()
    if (error?.errors?.length) errorMessage = error.errors[0]
    dispatch(getHeadlinesFailure(errorMessage))
  }
}

export const fetchFeatured = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getFeaturedStart())
    const data = await getFeatured()
    dispatch(getFeaturedSuccess(data))
  } catch (err) {
    let errorMessage = 'Unable to get the News!'
    const error = await err.response.json()
    if (error?.errors?.length) errorMessage = error.errors[0]
    dispatch(getFeaturedFailure(errorMessage))
  }
}
