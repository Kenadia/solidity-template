const SolidityTemplate = artifacts.require("./SolidityTemplate.sol");

contract("SolidityTemplate", async function (accounts) {
  it("should deploy", async function () {
    await SolidityTemplate.deployed();
  });
});
