const Storage = artifacts.require("Storage");

contract("Storage",accounts => {
    // Test case
  it('retrieve returns a value previously stored',async ()=> {
    // Store a value
    let instance = await Storage.deployed();
    await instance.store(5);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    assert.equal(((await instance.retrieve()).toString()),'5');
  })
})

