import {GET_PRIZES} from './TournamentsActions';

const initialState = {
  methods: null,
};

const TournamentReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRIZES:
      return {
        ...state,
        methods: action.payload,
      };
    default:
      return state;
  }
};
export default TournamentReducers;
