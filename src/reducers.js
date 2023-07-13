import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILURE,
} from "./constants";

/**
 * Represents the initial state of the search component.
 * @type {Object}
 * @property {string} searchField - The value of the search field.
 */
const initialStateSearch = {
  searchField: "",
};

/**
 * Reducer function for the searchRobots state.
 * @param {object} [state=initialStateSearch] - The initial state of the searchRobots state.
 * @param {object} [action={}] - The action object that contains the type and payload.
 * @returns The updated state based on the action type.
 */
export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

/**
 * Represents the initial state for the robots reducer.
 * @type {Object}
 * @property {boolean} loading - Indicates if the robots are currently being loaded.
 * @property {Array} robots - An array of robot objects.
 * @property {null} error - Represents any error that occurred while loading the robots.
 */
const initialStateRobots = {
  loading: false,
  robots: [],
  error: null,
};

/**
 * Reducer function for handling the state of the robots in the application.
 * @param {object} state - The current state of the robots.
 * @param {object} action - The action object that contains the type and payload.
 * @returns The updated state based on the action type.
 */
export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { loading: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        robots: action.payload,
      });
    case REQUEST_ROBOTS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    default:
      return state;
  }
};
