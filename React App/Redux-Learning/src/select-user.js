
export const selectUser = (user) => {
    // console.log('You Clicked on user:', user.first);
    return{
        type: 'USER_SELECTED',
        payload: user
    }
};

