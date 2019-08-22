import { ADDWIKI, WIKI, LOAD_WIKI, SEND_WIKI, START, FAIL, SUCCESS } from "../constants";

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  object: {}
};

export default (wikiState = initialState, action) => {
  

  switch (action.type) {
    case SEND_WIKI + START: {
      return {
        ...wikiState,
        loaded: false,
        loading: true
      };
    }
    case SEND_WIKI + SUCCESS: {
      return {
        ...wikiState,
        loaded: true,
        loading: false,
        error: null,
        object: action.response
      };
    }
    case SEND_WIKI + FAIL: {
      return {
        ...wikiState,
        loaded: false,
        loading: false,
        error: action.error
      };
    }
    case LOAD_WIKI + START: {
      console.log("LOAD_WIKI + START", action);
      return {
        ...wikiState,
        loaded: false,
        loading: true
      };
    }
    case LOAD_WIKI + SUCCESS: {
      console.log("LOAD_WIKI + SUCCESS", action);
      return {
        ...wikiState,
        loaded: true,
        loading: false,
        error: null,
        object: action.response
      };
    }
    case LOAD_WIKI + FAIL: {
      console.log("LOAD_WIKI + FAIL", action);
      return {
        ...wikiState,
        loaded: false,
        loading: false,
        error: action.error
      };
    }
    case ADDWIKI: {
      // console.log("ADDWIKI reduce");
      // console.log(action);
      return {
        ...wikiState,
        object: action.payload
      };
    }
    default:
      return wikiState;
  }
};
