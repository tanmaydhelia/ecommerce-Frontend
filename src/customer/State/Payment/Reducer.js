import { CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_FAILURE } from "./ActionType.js";

const initialState = {
    loading: false,
    error: null,
    paymentData: null
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PAYMENT_REQUEST:
        case UPDATE_PAYMENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case UPDATE_PAYMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default paymentReducer;