const fetchPromise = require("./fetchPromise");

test("The Data is Anjas Gantenk", () => {
  return expect(fetchPromise()).resolves.toBe("Anjas Gantenk");
});
