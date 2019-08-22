import { ADDWIKI, LOAD_WIKI, SEND_WIKI, FAIL, SUCCESS, START } from "./constants";
import { selectWikiLoaded, selectWikiLoading } from "../store/selectors";

export const getWiki = () => (dispatch, getState) => {
  const state = getState();

  const isWikiLoading = selectWikiLoading(state);
  const isWikiLoaded = selectWikiLoaded(state);
  
  if(!isWikiLoaded && !isWikiLoading) {
    dispatch({type: LOAD_WIKI + START})
    fetch("http://wiki/api/getWikiList.php")
      .then(res => res.json())
      .then(response => {
        dispatch({type: LOAD_WIKI + SUCCESS, response});
      })
      .catch(error => dispatch({type: LOAD_WIKI + FAIL, error}))
  }
}

export const addWiki = wiki => (dispatch, getState) => {
  dispatch({type: SEND_WIKI + START});
  fetch("http://wiki/api/addWiki.php", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(wiki)
  })
    .then(res => res.json())
    .then(response => {
      dispatch({ type: SEND_WIKI + SUCCESS, response });
    })
    .catch(error => dispatch({ type: SEND_WIKI + FAIL, error }));
};
