export const getAccessToken = () => {
  let aux: string = window.location.search;
  const at = aux.substr(aux.indexOf("=") + 1);
  return at;
}