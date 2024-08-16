import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";

import {api, API_BASE_URL} from "../../../config/apiConfig"


export const createOrder = (reqData) => async(dispatch)=>{
    console.log("reqData",reqData);
    dispatch({type:CREATE_ORDER_REQUEST});

    try {

        // const config ={
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": `Bearer ${reqData.jwt}`,
        //     },
        // };

        const {data} = await api.post(
            "/api/orders/",
            reqData.address,
        );

        if(data._id){   
            reqData.navigate({search: `step=3&order_id=${data._id}`});
        }

        console.log("Created Order: ", data);

        dispatch({type: CREATE_ORDER_SUCCESS,
            payload:data,
        })

    } catch (error) {
        console.log("catch error:", error);
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: error.message,
        });
    }
};

export const getOrderById = (orderId) => async(dispatch)=>{
    console.log("get Order Req",orderId);
    dispatch({type:GET_ORDER_BY_ID_REQUEST});

    try {
        const {data} = await api.get(
            `/api/orders/${orderId}`,
        );
        console.log("Order by ID: ", data);

        dispatch({type: GET_ORDER_BY_ID_SUCCESS,
            payload:data,
        });

    } catch (error) {
        console.log("catch error:", error);
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload: error.message,
        });
    }
};