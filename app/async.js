exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  },

  manipulateRemoteData: function (url) {

    return new Promise((resolve, reject) => {
      const response = fetch(url);
      response.then(res => res.json())
        .then(parsed => { 
          let data = parsed.people.map(item=>item.name);
          data = data.sort();
          resolve(data); 
        })
    })
  }
}; 
 