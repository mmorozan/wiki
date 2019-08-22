import { ADDWIKI, WIKI, SEND_WIKI, START, FAIL, SUCCESS } from "../constants";

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  object: {}
};

export default (wikiState = initialState, action) => {
  console.log("wikijs", action);

  switch (action.type) {
    case SEND_WIKI + START: {
      return {
        ...wikiState,
        loaded: false,
        loading: true
      };
    }
    case SEND_WIKI + SUCCESS: {
      console.log(action);
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
    case ADDWIKI: {
      console.log("ADDWIKI reduce");
      return {
        ...wikiState,
        object: action.payload
      };
    }
    default:
      return wikiState;
  }
};
