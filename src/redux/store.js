import { configureStore  } from '@reduxjs/toolkit';
import manageCategoryReducer from './ManageCategoryReducer';
import uiComponentReducer from './UIComponentReducer'

export default configureStore({
    reducer : {
        manageCategory : manageCategoryReducer,
        uiComponentState : uiComponentReducer,
    }
});