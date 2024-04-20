// authSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { ILogin } from '../../interfaces/User.interface'
import { ServiceMessage } from '../../interfaces/ServiceResponse.interface'
import { loginRequisition } from '../../src/services/Login.service'

interface AuthState {
    user: ILogin | null
    loading: boolean
    error: ServiceMessage | null
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null
}

export const login = createAsyncThunk('auth/login', async (user: ILogin, thunkAPI) => {
    try {
        const response = await loginRequisition(user)
        console.log(response)
        return response.data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<ILogin>) => {
                state.user = action.payload
                state.loading = false
            })
            .addCase(login.rejected, (state, action: PayloadAction<ServiceMessage | any>) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default authSlice.reducer