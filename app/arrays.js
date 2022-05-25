exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
     for (let i=0;i<arr.length;i++){
        if(arr[i]===item) return i ;
     }
    return -1;
  },

  sum: function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    return arr.filter((row) => {
      return row != item;
      })
  },

  removeWithoutCopy: function (arr, item) {
    for (let i = 0; i < arr.length; i++){
      
      if (arr[i] === item) {
        arr.splice(i, 1);
          i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    let arr = arr1.concat(arr2);
    return arr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    arr.forEach((i) => {
      if (i === item) count++;
    });
    return count;
  },

  duplicates: function (arr) {
    let duplicateArray = [];
    for (let i = 0; i < arr.length; i++){
      for (let j = i + 1; j < arr.length; j++){
        if (arr[i] === arr[j] && !duplicateArray.includes(arr[i]) ) {
          duplicateArray.push(arr[j]);
        }
      }
    }
    return duplicateArray;
  },

  square: function(arr) {
    return arr.map((item) => {
      return item * item;
    })
  },

  findAllOccurrences: function(arr, target) {
    let itemOccurences = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === target) {
       itemOccurences.push(i); 
      }
    }
    return itemOccurences;
  }
};
