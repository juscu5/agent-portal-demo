
export const initialState = {
    messageDialog: {
        message :"",
        category : "",
        type : "",
        isShow : false,
        interval: 5000,
    },
    confirmDialog : {
        header : "",
        type : "",
        message : "",
        isShow : false,
        onConfirm : ()=> {}
    },
    loadingDialog : {
        status : false
    }
}

export const uiComponentActionTypes = {
    setMessageDialog : 'setMessageDialog',
    setConfirmDialog : 'setConfirmDialog',
    setConfirmDialogCancel : 'setConfirmDialogCancel',
    setLoadingDialogStatus : 'setLoadingDialogStatus'
}

export const uiComponentActions = {
    setMessageDialog : payload => ({
        type : uiComponentActionTypes.setMessageDialog,
        payload
    }),
    setConfirmDialog : payload => ({
        type : uiComponentActionTypes.setConfirmDialog,
        payload
    }),
    setConfirmDialogCancel : payload => ({
        type : uiComponentActionTypes.setConfirmDialogCancel,
        payload
    }),
    setLoadingDialogStatus : payload => ({
        type : uiComponentActionTypes.setLoadingDialogStatus,
        payload
    })
}

export default function uiComponentReducer(state = initialState, action) {
    switch (action.type) {
        case uiComponentActionTypes.setMessageDialog:  
            return {...state, messageDialog : action.payload };
            break; 
        case uiComponentActionTypes.setConfirmDialog:   
            return {...state, confirmDialog : action.payload };
            break; 
        case uiComponentActionTypes.setConfirmDialogCancel:  
            return {...state, confirmDialog : {...state.payload, isShow : false} };
            break; 
        case uiComponentActionTypes.setLoadingDialogStatus:  
            return {...state, loadingDialog : action.payload };
            break; 
        default:
            return state;
            break;
    }
}