export const API_BASE_URL = 'http://localhost:9000';

export const API_ENDPOINTS = {
    LOGIN: '/api/auth/login',
    SIGNUP: '/api/auth/signup',
    LOGOUT: '/api/auth/logout',

    GET_ALL_CARS_ADMIN: '/api/admin/car',
    GET_ALL_CARS: '/api/customer/cars',
    SEARCH_CARS: '/api/customer/car/search',
    GET_CAR_BRANDS: '/api/customer/car/brands',
    ADD_NEW_CAR: '/api/admin/car',
    UPDATE_CAR:'/api/admin/car/',
    DELETE_CAR:'/api/admin/car/',
    BOOK_A_CAR:'/api/customer/cars/book',

    GET_ALL_BOOKINGS_ADMIN: '/api/admin/car/bookings',
    CHANGE_BOOKING_STATUS: '/api/admin/car/booking/',
    UPDATE_BOOKING_ADMIN: '/api/admin/car/booking/',
    DELETE_BOOKING_ADMIN: '/api/admin/car/booking/',
    GET_ALL_BOOKINGS_USER: '/api/customer/car/bookings/',
    UPDATE_BOOKING_USER: '/api/customer/car/booking/',
    DELETE_BOOKING_USER: '/api/customer/car/booking/',

    GET_ALL_USERS: '/api/admin/users',
}