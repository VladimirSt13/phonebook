import { createSlice } from '@reduxjs/toolkit';

const initialFilters = { query: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilters,
  reducers: {
    setFiltersQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setFiltersQuery } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
