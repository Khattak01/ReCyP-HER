import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const slice = createSlice({
    name: "alert",
    initialState: [],
    reducers: {
        addAlert: (alerts, { payload }) => {
            console.log(payload)
            let status = true;
            for (let i = 0; i < alerts.length; i++) if (payload.msg === alerts[i].msg) {
                status = false;
                return;
            }
            if (status)
                alerts.push(payload);

        },

        setAlertDisplay: (alerts, { payload }) => {
            var foundIndex = alerts.findIndex(alert => alert.id === payload.id);
            alerts[foundIndex].display = payload.display;
            // elert = alerts.find(alert => alert.id !== payload.id)
        },

        removeAlert: (alerts, action) => {
            return alerts.filter(alert => alert.id !== action.payload)
        }
    }
});

export const { setAlertDisplay } = slice.actions;


//actions
export const alertAdded = ({ msg, alertType }, timeout = 5000) => (dispatch) => {
    const id = uuidv4();

    // console.log(store.getData())
    dispatch(slice.actions.addAlert({ msg, alertType, id, timeout }))

    setTimeout(() => dispatch(slice.actions.removeAlert(id)), timeout)
}


export const selectAlert = state => state.alerts;

export default slice.reducer;