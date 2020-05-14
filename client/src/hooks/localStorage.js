export default function useLocalStorage() {
  const addToLocalStorage = (key, object) => {
    let objAsString = JSON.stringify(object);
    return localStorage.setItem(key, objAsString);
  };
  const getFromLocalStorage = (key) => {
    let result = localStorage.getItem(key);
    return JSON.parse(result);
  };

  return { addToLocalStorage, getFromLocalStorage };
}
