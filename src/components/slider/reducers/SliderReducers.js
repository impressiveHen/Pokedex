import HeaderPokemon from '../../../assets/HeaderPokemon.jpg';
import ThreeBirds from '../../../assets/ThreeBirds.jpg';
import LucPik from '../../../assets/LucPik.png';
import Dragon from '../../../assets/Dragon.jpg';
import Omega from '../../../assets/Omega.jpg';

import { SET_TRANSLATE_VALUE, SET_INDEX } from '../actions/SliderActions';

const initialState = {
    images: [
        Omega,
        HeaderPokemon,
        Dragon,
        ThreeBirds,
        LucPik
    ],
    index: 0,
    translateValue: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_TRANSLATE_VALUE:
            return { ...state, translateValue: action.offset }
        case SET_INDEX:
            return { ...state, index: action.index }
        default:
            return state
    }
}