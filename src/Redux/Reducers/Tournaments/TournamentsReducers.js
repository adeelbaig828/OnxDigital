import {
  GET_ALL_TOURNAMNETS,
  GET_PRIZES,
  GET_SCORE,
  GET_TOURNAMNET,
  GET_TOURNAMNET_PROGRESS,
} from './TournamentsActions';

const initialState = {
  allTournaments: null,
  methods: null,
  getSingleTournament: {},
  getScore: {},
  getTournamentprogress: {},
};

const TournamentReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRIZES:
      return {
        ...state,
        methods: action.payload,
      };
    case GET_ALL_TOURNAMNETS:
      return {
        ...state,
        allTournaments: action.payload,
      };
    case GET_TOURNAMNET:
      return {
        ...state,
        getSingleTournament: action.payload,
      };
    case GET_TOURNAMNET_PROGRESS:
      return {
        ...state,
        getTournamentprogress: action.payload,
      };
    case GET_SCORE:
      return {
        ...state,
        getScore: action.payload,
      };
    default:
      return state;
  }
};
export default TournamentReducers;
