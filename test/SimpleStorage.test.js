const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", (accounts) => {

  it("should deploy the contract successfully", async () => {
    const instance = await SimpleStorage.deployed();
    assert(instance.address !== "", "Contract was not deployed");
  });

  it("should set and get the stored number correctly", async () => {
    const instance = await SimpleStorage.deployed();

    // 1. Set the value
    await instance.setNumber(5, { from: accounts[0] });

    // 2. Read the value
    const stored = await instance.getNumber();

    // 3. Validate
    assert.equal(stored.toNumber(), 5, "The value stored is incorrect");
  });

});
