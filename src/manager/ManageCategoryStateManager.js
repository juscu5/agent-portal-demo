import { manageCategoryActions } from '../redux/ManageCategoryReducer';

 
export const setAllCategory = async (dispatch, paramData) => {
    dispatch(manageCategoryActions.setCategoryData(paramData));
}