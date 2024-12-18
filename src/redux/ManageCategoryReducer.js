
const initialState = { 
    categoryList : []
}

export const manageCategoryActionTypes = { 
    setCategoryData : 'setCategoryData',
}

export const manageCategoryActions = {
    setCategoryData : payload => ({
        type : manageCategoryActionTypes.setCategoryData,
        payload
    })
}

export default function manageCategoryReducer(state = initialState, action){
    switch (action.type) {
        case manageCategoryActionTypes.setCategoryData:
            return { 
                categoryList: [...action.payload]
            }
            break;
        default:
            return state;
            break;
    }
}