export const SET_TRANSLATE_VALUE = 'set_translate_value';
export const SET_INDEX = 'set_index';

export function setTranslateValue(value) {
  return {
    type: SET_TRANSLATE_VALUE,
    offset: value
  }
}

export function setIndex(i) {
  return {
    type: SET_INDEX,
    index: i
  }
}