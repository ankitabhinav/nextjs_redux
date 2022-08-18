import {
    CHANGE_JOB_TITLE,
    CHANGE_LOCATION,
    CHANGE_DESCRIPTION,
    CHANGE_JOB_TYPE,
} from "../actions/types";

const initialState = {
    job_title: "test job",
    location: "",
    description: "",
    job_type: null,
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_JOB_TITLE:
            return {
                ...state,
                job_title: action.payload,
            };
        case CHANGE_LOCATION:
            return {
                ...state,
                location: action.payload,
            };
        case CHANGE_DESCRIPTION:
            return {
                ...state,
                description: action.payload,
            };
        case CHANGE_JOB_TYPE:
            return {
                ...state,
                job_type: action.payload,
            };
        default:
            return state;
    }
};

export default formReducer;