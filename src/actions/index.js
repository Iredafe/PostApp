import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts=(state= null, action)=>{
    return{
        type: 'FETCH_POSTS'
    };
};