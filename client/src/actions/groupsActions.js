export const GET_GROUPS = 'GET_GROUPS'
export const GET_GROUPS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_GROUPS_FAILURE = 'GET_POSTS_FAILURE'

export const getGroups = () => ({
    type: GET_GROUPS,
})
  
export const getGroupsSuccess = (groups) => ({
    type: GET_GROUPS_SUCCESS,
    payload: groups,
})
  
export const getGroupsFailure = () => ({
    type: GET_GROUPS_FAILURE,
})

export const fetchGroups = () => {
    return async (dispatch) => {
      dispatch(getGroups())
  
      try {
        const response = await fetch('http://localhost:3000/cohorts')
        const data = await response.json()
  
        dispatch(getGroupsSuccess(data))
      } catch (error) {
        dispatch(getGroupsFailure())
      }
    }
}