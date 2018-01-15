const trelloReducer = (state = {}, action) => {

    switch (action.type) {
      case 'TRELLO_DETAILS':
            let trelloContent = {};
            action.payload.forEach(element => {
                trelloContent = Object.assign({}, trelloContent, state, { [element.type]: element.list } )
            });

            return trelloContent;
      case 'ADD_TODO':

        return Object.assign({}, state, { todo: [...state.todo, action.item] });
      default:
        return state
    }
}
  
export default trelloReducer;