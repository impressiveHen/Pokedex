import Pokemon from '../Pokemon';

export const DATA_IS_LOADING = "DATA_IS_LOADING";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FILTER_NAMES = 'FILTER_NAMES'

export const dataIsLoading = (bool) => {
    return {
        type: 'DATA_IS_LOADING',
        isLoading: bool
    };
}

export function fetchDataSuccess(collection) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        isLoading: false,
        data: collection
    };
}

export const fetchLimitNames = (limit = 100) => {
    // redux-thunk
    return async dispatch => {
        dispatch(dataIsLoading(true));

        try {
            const allResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
            const allUrlsData = await allResponse.json();
            // console.log(allUrlsData.results);

            const collection = [];

            for (var i=0; i<allUrlsData.results.length; i++) {
                const res = await fetch(allUrlsData.results[i].url)
                const resData = await res.json()
                const pokemon = new Pokemon(resData)
                collection.push(pokemon)
            }
            
            // console.log(collection)
            dispatch(fetchDataSuccess(collection));

        } catch (err) {
            console.log(err);
        }
    };
};

export const filterNames = (name) => {
    dataIsLoading(true);
    return {
        type: FILTER_NAMES,
        name: name
    }
}
