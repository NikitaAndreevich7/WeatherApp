

const initialState = {
    city:'Kharkov',

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NET_CITY":
            return {
                ...state,
                city:action.payload
            };



        default:
            return state;
    }
};
