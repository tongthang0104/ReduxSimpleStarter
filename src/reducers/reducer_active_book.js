//State argument is not application state, only the state this reducer is responsible for
//default state = null because reducer cannot provide undefined value
export default function(state = null, action) {

  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
