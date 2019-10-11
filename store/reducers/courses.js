import { GET_ALL_COURSES, GET_POPULAR_COURSES } from "../actions/courses";

const initialState = {
    courses: [],
    popularCourses: []
}


export default (state=initialState, action) => {
    switch(action.type){
        case GET_ALL_COURSES:
            return {
                ...state,
                courses: action.coursesData
            }
        case GET_POPULAR_COURSES:
            return {
                ...state,
                popularCourses: action.coursesData
            }
        default:
            return state;
    }
}