import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from  "immer";

enableMapSet();

let initialState = {
    ids: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addOrderIdAction: (state, action) => {
            if (!state.ids.includes(action.payload)){
                state.ids.push(action.payload);
            }

            console.log("<-----> " + state.ids);
        },

        removeOrderIdAction: (state, action) => {
            if (state.ids.length) {
                const index = state.ids.indexOf(action.payload);
                if (index > -1) {
                    state.ids.splice(index, 1)
                }
            }
        } 
    }
})
export const { addOrderIdAction, removeOrderIdAction } = cartSlice.actions
export default cartSlice.reducer