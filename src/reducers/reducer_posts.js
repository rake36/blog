import _ from 'lodash';
import { FETCH_POSTS} from '../actions';

// default state to something so first time threw it doesn't crash

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // console.log(action.payload.data);  // [post1, post2]
            // { 4: post }

            // pulls out a property from each item and builds a big object with that as the Key
            return _.mapKeys(action.payload.data, "id");  
        default: 
            return state;
    }
}