var Migrations = artifacts.require('./Migrations.sol');
var SolidityTemplate = artifacts.require('./SolidityTemplate.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SolidityTemplate);
};
