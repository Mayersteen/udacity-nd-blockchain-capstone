// migrating the appropriate contracts
const ERC721Mintable = artifacts.require("./ERC721Mintable.sol");
var SquareVerifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");


module.exports = function(deployer) {
  const tokenName = "My Test Token";
  const tokenSymbol ="MTT";
  
  deployer.deploy(ERC721Mintable, tokenName, tokenSymbol);
  deployer.deploy(SquareVerifier);
  deployer.deploy(SolnSquareVerifier, tokenName, tokenSymbol);
};
