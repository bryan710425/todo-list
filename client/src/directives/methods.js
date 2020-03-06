
export default {
  generateRandomID: () => {
    // This is to solve the Vue.js problem in which iterated elements need a unique ID in order to remove
    // them reliably from the DOM. Array indexes don't work when deleting from an array.
    // Random string via https://gist.github.com/6174/6062387
    const number = Math.random() * 1000000000
    const str = number.toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    let hash = ''
    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i)
    }
    return hash % 100000000
  }

}
