// migrating the appropriate contracts
const ERC721Mintable = artifacts.require("./ERC721Mintable.sol");
const SquareVerifier = artifacts.require("./Verifier.sol");
const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");


module.exports = function(deployer) {
  const tokenName = "My Test Token";
  const tokenSymbol ="MTT";
  
  deployer.deploy(ERC721Mintable, tokenName, tokenSymbol);

  // As SolnSquareVerifier requires the address of the SquareVerifier contract,
  // me must ensure that the deployment is executed in the correct order.
  deployer.deploy(SquareVerifier).then( () => {
    return deployer.deploy(SolnSquareVerifier, SquareVerifier.address, tokenName, tokenSymbol);
  });

};