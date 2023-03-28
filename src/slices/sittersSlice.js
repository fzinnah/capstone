import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllSitters = createAsyncThunk(
  'allSitters',
  async (x, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/sitters');
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchSingleSitter = createAsyncThunk(
  'singleSitter',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/sitters/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchSingleSitterReviews = createAsyncThunk(
  'sitterReviews',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/sitters/${id}/reviews`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchSingleSitterRatings = createAsyncThunk(
  'sitterRatings',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/sitters/${id}/ratings`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchSitterBookings = createAsyncThunk(
  'sitterBookings',
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/sitters/${id}/bookings`, {
        headers: {
          authorization: token,
        },
      });
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const sittersSlice = createSlice({
  name: 'sitters',
  initialState: {
    sitters: [],
    singleSitter: {},
    // add clients, preferences, etc
    sitterReviews: [],
    sitterRatings: [],
    sitterBookings: [],
    sitterBooking: {},
    error: '',
    status: '',
  },
  reducers: {
    resetSitterStatus: (state) => {
      state.error = '';
      state.status = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSitters.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.sitters = payload;
      })
      .addCase(fetchAllSitters.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllSitters.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSingleSitter.fulfilled, (state, { payload }) => {
        state.singleSitter = payload || {};
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchSingleSitter.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleSitter.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSingleSitterReviews.fulfilled, (state, { payload }) => {
        state.sitterReviews = payload || {};
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchSingleSitterReviews.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleSitterReviews.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSingleSitterRatings.fulfilled, (state, { payload }) => {
        state.sitterRatings = payload || {};
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchSingleSitterRatings.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleSitterRatings.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSitterBookings.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.sitterBookings = payload;
      })
      .addCase(fetchSitterBookings.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSitterBookings.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      });
  },
});

export const { resetSitterStatus } = sittersSlice.actions;

export const selectSitters = (state) => state.sitters;
export const selectSingleSitter = (state) => state.sitters.singleSitter;

export default sittersSlice.reducer;
