import { ADDWIKI, SEND_WIKI, FAIL, SUCCESS } from "./constants";

export const addWiki = wiki => (dispatch, getState) => {
  const state = getState();
  dispatch({type: SEND_WIKI + START});
  console.log("AC addWiki");
  console.log(wiki);
  console.log(JSON.stringify(wiki));
  fetch("http://docs/api/addWiki.php", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(wiki)
  })
    .then(res => res.json())
    .then(response => {
      dispatch({ type: SEND_WIKI + SUCCESS, response });
      return {
        type: ADDWIKI,
        payload: wiki
      };
    })
    .catch(error => dispatch({ type: SEND_WIKI + FAIL, error }));
};
