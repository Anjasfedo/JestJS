const fetchData = require("./fetchData");

test("Data is Anjas Gantenk", (done) => {
  const callback = (data) => {
    try {
      expect(data).toBe("Anjas Gantenk");
      done();
    } catch (error) {
      done(error);
    }
  };

  fetchData(callback);
});
