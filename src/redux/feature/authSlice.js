import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import  isJwtValid  from '../../utilities/isJwtValid';

const initialState = {
    jwt: Cookies.get('jwt') || '',
    userRole: Cookies.get('userRole') || '',
    userId: Cookies.get('userId') || '',
    isAuthenticated: !!Cookies.get('jwt') && isJwtValid(Cookies.get('jwt')),
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            const { jwt, userRole, userId } = action.payload;
            state.jwt = jwt;
            state.userRole = userRole;
            state.userId = userId;
            state.isAuthenticated = isJwtValid(jwt);

            
            Cookies.set('jwt', jwt, { expires: 1 }); // Expires in 1 day
            Cookies.set('userRole', userRole, { expires: 1 });
            Cookies.set('userId', userId, { expires: 1 });
        },
        logout(state) {
            state.jwt = '';
            state.userRole = '';
            state.userId = '';
            state.isAuthenticated = false;

            // Remove JWT and user information from cookies
            Cookies.remove('jwt');
            Cookies.remove('userRole');
            Cookies.remove('userId');
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
