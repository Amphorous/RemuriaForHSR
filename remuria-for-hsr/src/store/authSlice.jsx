import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to check auth status
export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/status', {
      credentials: 'include',
    });
    const data = await response.json();
    console.log('Full Discord user object:', data);

    if (data.authenticated) {
      return {
        authenticated: true,
        username: data.username || '',
        discordData: data,
      };
    } else {
      return {
        authenticated: false,
        username: '',
        discordData: null,
      };
    }
  } catch (error) {
    console.error('Error checking auth:', error);
    return { authenticated: false, username: '', discordData: null };
  }
});

// Thunk to logout
export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  try {
    const csrfToken = getCookie('XSRF-TOKEN');

    const res = await fetch('http://localhost:8080/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-XSRF-TOKEN': csrfToken,
      },
    });

    console.log('Logout response status:', res.status);
    if (!res.ok) throw new Error('Logout failed');

    const text = await res.text();
    console.log('Logout response body:', text);

    // Redirect after successful logout
    window.location.href = 'http://localhost:5173/home';

    return { authenticated: false, username: '', discordData: null };
  } catch (err) {
    console.error('Logout failed:', err);
    return rejectWithValue(err.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { authenticated: false, username: '', discordData: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(logout.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default authSlice.reducer;
