import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts=()=>{
    return function(dispatch, getState){
        const promise = jsonPlaceholder.get('/posts');

    return{
        type: 'FETCH_POSTS',
        payload: promise
    };
    }
};

export const selectPost=()=>{
    return {
        type: 'SELECT_POST'
    }
}