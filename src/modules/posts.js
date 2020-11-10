import * as postsAPI from '../api/posts';
import { createPromiseThunk, reducerUtils } from '../lib/asyncUtils';

// Action Type
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_FAIL = 'GET_POSTS_FAIL';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAIL = 'GET_POST_FAIL'

// export const getPosts = () => async dispatch => {
//   dispatch({ type: GET_POSTS }); // 요청이 시작됨

//   try {
//     const posts = await postsAPI.getPosts();
//     dispatch({ type: GET_POSTS_SUCCESS, posts });
//   } catch (e) {
//     dispatch({ type: GET_POSTS_ERROR, error: e });
//   }
// };

// export const getPost = id => async(dispatch) => {
//   dispatch({ type: GET_POST });

//   try {
//     const post = await postsAPI.getPostById(id);
//     dispatch({ type: GET_POST_SUCCESS, post });
//   } catch (e) {
//     dispatch({ type: GET_POST_FAIL, error: e })
//   }
// }

export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial()
};

// const initialState = {
//   posts: {
//     loading: false,
//     data: null,
//     error: null
//   },
//   post: {
//     loading: false,
//     data: null,
//     error: null
//   }
// }

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: reducerUtils.loading()
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: reducerUtils.success(action.payload)
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: reducerUtils.error(action.error)
      };
    case GET_POST:
      return {
        ...state,
        post: reducerUtils.loading()
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: reducerUtils.success(action.payload)
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: reducerUtils.error(action.error)
      };
  }
}