const fetchData = (callback) => {
  setTimeout(() => {
    callback("Anjas Gantenk");
  }, 1000);
};

module.exports = fetchData;
