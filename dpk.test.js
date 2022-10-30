const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("Candidate", () => {
  it("Returns truthy value", () => {
    const trivialKey = deterministicPartitionKey();
    expect(!!trivialKey).toBe(true)
  })
})
