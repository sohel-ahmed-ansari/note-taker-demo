const initialState = {
    content: '',
    isEmpty: true
}
const newNote = (state = initialState, action) => {
    const content = action.content || '';
    const isEmpty = content === '';
    switch (action.type) {
        case 'UPDATE_NEW_NOTE':
            return {
                content,
                isEmpty
            };
        default:
            return state;
    }
};

export default newNote;