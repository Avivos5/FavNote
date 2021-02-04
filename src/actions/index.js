export const removeItem = (itemType, id) => ({
    type: 'REMOVE_ITEM',
    payload: {
        itemType,
        id
    }
});
export const addItem = (itemType, itemContent) => {
    const getId = () => `_${Math.random().toString(36).substr(2, 9)}`; //prosta funkcja generująca unikalne ID

    return {
        type: 'ADD_ITEM',
        payload: {
            itemType,
            item: {
                id: getId(),
                ...itemContent
            }
        }
    };
};
