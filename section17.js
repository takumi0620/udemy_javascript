promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 100);
});

promise
  .then(() => console.log('処理が完了しました。')) // resolveならこれが実行される
  .then(() => console.log('これも実行される'))　// resolveならこれが実行される
  .catch(() => console.log('問題発生')); // rejectならこれが実行される
promise.catch();