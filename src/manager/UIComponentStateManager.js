import {uiComponentActions, initialState} from '../redux/UIComponentReducer';

export const setConfirmDialog = (dispatch, data = initialState.confirmDialog) => { 
    dispatch(uiComponentActions.setConfirmDialog(data)); 
}

export const setConfirmDialogCancel = (dispatch) => {
    dispatch(uiComponentActions.setConfirmDialogCancel());
}

export const setLoadingDialogStatus = (dispatch, data) => {
    dispatch(uiComponentActions.setLoadingDialogStatus(data));
}

export const setMessageDialog = (dispatch, data = initialState.messageDialog) => {
    dispatch(uiComponentActions.setMessageDialog(data));
}