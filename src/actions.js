import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILURE,
} from "./constants";

/**
 * Creates an action object to change the search field value.
 * @param {string} text - The new value of the search field.
 * @returns {object} An action object with the type and payload properties.
 */
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

/**
 * Sends a request to retrieve a list of robots from a remote server.
 * @param {function} dispatch - The dispatch function from the Redux store.
 * @returns None
 */
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    /* Get the users from the API in the form of a Promise and call json 
    method. */
    .then((response) => response.json())
    /* Get second promise with users and fill the array of robots with 
    the users from the API*/
    .then((users) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users }))
    .catch((error) =>
      dispatch({ type: REQUEST_ROBOTS_FAILURE, payload: error })
    );
};
