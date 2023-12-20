const fetchPromise = require("./fetchPromise");

test("The Data is Anjas Gantenk", async () => {
  const data = await fetchPromise();
  expect(data).toBe("Anjas Gantenk");
});
