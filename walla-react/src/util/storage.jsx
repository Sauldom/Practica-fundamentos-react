const storage = {
  get(key) {
    let value = localStorage.getItem(key);
    if (!value) {
      value = sessionStorage.getItem(key);
    }
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  },
  setLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  setSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};

export default storage;
