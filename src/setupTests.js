// Here we have a fake localStorage
class LocalStorageMock {
  store = {};
  
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = value.toString();
  }
  /* Here, we can implement other functions/properties found in localStorage object. You can find one implementation of it here- https://github.com/clarkbw/jest-localstorage-mock/blob/master/src/localstorage.js
  */
}
// Here we add a mock localStorage object in window object. We can also use global instead of window.
window.localStorage = new LocalStorageMock();