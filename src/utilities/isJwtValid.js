import { jwtDecode } from 'jwt-decode';

const isJwtValid = (jwt) => {
    if (!jwt) {
        return false;
    }

    try {
        const decodedToken = jwtDecode(jwt);
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        return decodedToken.exp > currentTime;
    } catch (e) {
        console.error('Invalid JWT:', e);
        return false;
    }
};

export default isJwtValid;
