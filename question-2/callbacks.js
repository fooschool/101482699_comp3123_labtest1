const resolvedPromise = () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve({'message': 'delayed success!'});
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject({'error': 'delayed exception!'});
    }, 500);
  });
};

resolvedPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

rejectedPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
