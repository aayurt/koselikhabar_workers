function getJsessionID():string {
  return localStorage.getItem("jsessionID") || "true";
}
function setJsessionID() {
  return localStorage.getItem("jsessionID");
}
export {getJsessionID,setJsessionID}
