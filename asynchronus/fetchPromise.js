const fetchPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Anjas Gantenk"), 1000);
  });
};

module.exports = fetchPromise