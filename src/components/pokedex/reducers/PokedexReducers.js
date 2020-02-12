import { FETCH_DATA_SUCCESS, DATA_IS_LOADING, FILTER_NAMES } from '../actions/PokedexActions';

const initialState = {
    collection: [],
    isLoading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {
                isLoading: false,
                collection: [...action.data]
            };
        case DATA_IS_LOADING:
            return {
                isLoading: action.isLoading
            };
        case FILTER_NAMES:
            return {
                isLoading: false,
                collection: state.collection.filter(pokeData => {
                    return pokeData.name.startsWith(action.name)
                })
            };
        default:
            return state;
    }
};