import { GET_GROUPS, GET_GROUPS_SUCCESS, GET_GROUPS_FAILURE } from '../actions/groupsActions'

const initState = { 
    groups: [], 
    loading: false,
    hasErrors: false,
}

const groupsReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_GROUPS:
            return { ...state, loading: true }
        case GET_GROUPS_SUCCESS:
            return { groups: action.payload, loading: false, hasErrors: false }
        case GET_GROUPS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}

export default groupsReducer