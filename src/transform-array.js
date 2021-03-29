const CustomError = require("../extensions/custom-error");

const rule = {
  "--double-next": 1,
  "--double-prev": 2,
  "--discard-next": 3,
  "--discard-prev": 4
};

module.exports = function transform(arr) {
  if(Array.isArray(arr) === false) {
    throw new Error();
  }

  const result = [];

  for(let i = 0; i < arr.length; i += 1) {
    if(rule[arr[i]]) {
      switch(rule[arr[i]]) {
        case 1:
          if(i < arr.length - 1) {
            result.push(arr[i + 1]);
          }
          break;
        case 2:
          if(i > 0) {
            result.push(result[result.length - 1]);
          }
          break;
        case 3:
          if(i < arr.length) {
            result.push(undefined);
            i += 1;
          }
          break;
        case 4:
          if(i > 0) {
            result.pop();
          }
          break;
      }
    } else {
      result.push(arr[i]);
    }
  }
  const res = result.filter(function(x) {
    return x !== undefined;
  });
  return res;
};
