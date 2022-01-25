import {
  ALL_LANGUAGE,
  ALL_ZONES,
  ARENA_DETAILS,
  GET_ZONES_BY_ARENA,
  ZONE_DETAILS,
} from './BooksActions';

const initialState = {
  allZones: null,
  zoneByArenas: null,
  allLanguage: null,
  subjects: null,
  zoneDetail: null,
};

const BooksReducers = (state = initialState, action) => {
  switch (action.type) {
    case ARENA_DETAILS:
      return {
        ...state,
        subjects: action.payload,
      };
    case ALL_ZONES:
      return {
        ...state,
        allZones: action.payload,
      };
    case GET_ZONES_BY_ARENA:
      return {
        ...state,
        zoneByArenas: action.payload,
      };
    case ALL_LANGUAGE:
      return {
        ...state,
        allLanguage: action.payload,
      };
    case ZONE_DETAILS:
      return {
        ...state,
        zoneDetail: action.payload,
      };
    default:
      return state;
  }
};
export default BooksReducers;
