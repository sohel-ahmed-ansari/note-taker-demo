import uuid from 'uuid/v1';

export const updateNewNote = (content) => ({
    type: 'UPDATE_NEW_NOTE', 
    content
});

export const addNote = (content) => ({
    type: 'ADD_NOTE', 
    content,
    id: uuid()
});

export const sortNotes = (sortIds) => ({
    type: 'SORT_NOTES', 
    sortIds
});

export const updateNote = (id, content) => ({
    type: 'UPDATE_NOTE', 
    id,
    content
});

export const setEditMode = (id, isEditing) => ({
    type: 'SET_EDIT_MODE', 
    id,
    isEditing
});