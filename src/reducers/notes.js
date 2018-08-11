const notes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state, {
                id: action.id,
                content: action.content || '',
                isEditing: false
            }];
        case 'SORT_NOTES':
            const sortIds = action.sortIds;
            return [...state].sort((a, b) => (sortIds.indexOf(a.id) - sortIds.indexOf(b.id)));
        case 'UPDATE_NOTE':
            return state.map((note) => {
                return (note.id === action.id) ? {
                    ...note, 
                    content: action.content
                } : note;
            });
        case 'SET_EDIT_MODE':
            return state.map((note) => {
                return (note.id === action.id) ? { 
                    ...note,
                    isEditing: action.isEditing
                } : note;
            });
        default:
            return state;
    }
};

export default notes;