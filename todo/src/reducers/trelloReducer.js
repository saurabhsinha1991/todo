const trelloReducer = (state = {}, action) => {

    switch (action.type) {
      case 'TRELLO_DETAILS':
            let trelloContent = {};
            action.payload.forEach(element => {
                trelloContent = Object.assign({}, trelloContent, state, { [element.type]: element.list } )
            });

            return trelloContent;
      case 'ADD_ITEM':
        return Object.assign({}, state, { [action.item.addType]: [...state[action.item.addType], action.item.item] },
            { [action.item.removeType]: action.item.removeType && state[action.item.removeType].filter((eachItem) => eachItem.title !== action.item.item.title) });
      case 'REMOVE_CARD':
            const { type, title } = action.item;

            const newList = state[type].filter((eachList) => eachList.title !== title);
        return Object.assign({}, state, {[type]: newList})
      default:
        return state
    }
}
  
export default trelloReducer;