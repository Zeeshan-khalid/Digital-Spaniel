import { createSlice } from '@reduxjs/toolkit';

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: [],
  reducers: {
    setTestimonials: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTestimonials } = testimonialsSlice.actions;

export default testimonialsSlice.reducer;
