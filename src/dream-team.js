const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (Array.isArray(arr)) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "string") {
        newArr.push(arr[i].trim().charAt(0).toUpperCase())
      }
    }
    newArr.sort()

    return newArr.join('');

  }
  return false
}

