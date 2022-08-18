import {
    CHANGE_JOB_TITLE,
    CHANGE_JOB_TYPE,
    CHANGE_LOCATION,
    CHANGE_DESCRIPTION,
  } from "./types";
  
  export const changeJobTitle = (title) => {
    return {
      type: CHANGE_JOB_TITLE,
      payload: title,
    };
  };
  
  export const changeLocation = (location) => {
    return {
      type: CHANGE_LOCATION,
      payload: location,
    };
  };
  
  export const changeDescription = (description) => {
    return {
      type: CHANGE_DESCRIPTION,
      payload: description,
    };
  };
  
  export const changeJobType = (jobType) => () => {
    return {
      type: CHANGE_JOB_TYPE,
      payload: jobType,
    };
  };