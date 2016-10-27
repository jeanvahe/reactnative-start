const initialState = {
      value: 0,
      titles: [{"title": "1"}, {"title": "2"}, {"title": "3"}]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {value: state.value + 1});
    case 'DECREMENT':
      return Object.assign({}, state, {value: state.value - 1});
    case 'CHANGE_TITLE':
      let arrays = state.titles.slice(0);
      arrays[action.id] = {"title": action.title};
      return Object.assign({}, state, {titles: arrays});
    default:
      return state
  }
};
