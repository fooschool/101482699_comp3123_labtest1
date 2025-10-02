const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = (arr) => {
  return new Promise((resolve, reject) => {
    const filteredArray = [];
    // example delay imitating what you normally do with a promise
    setTimeout(() => {
      // validation example
      if (!Array.isArray(arr)) {
        reject(`Given type is not a valid array: ${typeof arr}`);
        return;
      }

      for (const e of arr) {
       if (typeof e == 'string') {
          filteredArray.push(e.toLowerCase());
        }
      }

      resolve(filteredArray)
    }, 300);
  });
};

lowerCaseWords(mixedArray)
  .then(r => {
    console.log(r);
  })
  .catch(error => {
    console.error('Error: ', error);
  });
