import {
  GET_ALL_TOURNAMNETS,
  GET_PRIZES,
  GET_TOURNAMNET,
} from './TournamentsActions';

const initialState = {
  allTournaments: null,
  methods: null,
  getSingleTournament: {},
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
    default:
      return state;
  }
};
export default TournamentReducers;
