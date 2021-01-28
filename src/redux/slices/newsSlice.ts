import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// import { AppThunk } from '../store'

interface IState {
  headlines: []
  isLoading: boolean
  error: string | null
}

const initialState = {
  headlines: [],
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
  },
})

export const { getHeadlinesStart, getHeadlinesSuccess, getHeadlinesFailure } = news.actions
export default news.reducer
