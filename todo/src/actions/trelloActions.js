export const getTrelloDetails = (data) => {
    return {
        type: 'TRELLO_DETAILS',
        payload: data
    }
}

export const addTodoList = (data) => {
    return {
        type: 'ADD_TODO',
        item: data
    }
}

export const removeItem = (data) => {
    return {
        type: 'REMOVE_CARD',
        item: data
    }
}