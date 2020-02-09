// ducks-modular-redux pattern 
// it is a way to organize the code
// types , actions & reducer in a single file

// TYPES
export const GET_REPOS = 'my-awesome-app/repos/LOAD';
export const GET_REPOS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';

// ACTIONS
export function listRepos(user) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`
      }
    }
  };
}

// REDUCER
export default function reducer(state = { repos: [] }, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    default:
      return state;
  }
}
