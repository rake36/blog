import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

// default state to something so first time threw it doesn't crash

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // console.log(action.payload.data);  // [post1, post2]
            // { 4: post }

            // pulls out a property from each item and builds a big object with that as the Key
            return _.mapKeys(action.payload.data, "id");
        case FETCH_POST:
            // ES5 Syntax
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;

            // ES6 Syntax
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_POST:
            // payload is the id for this action
            return _.omit(state, action.payload);
        default:
            return state;
    }
}