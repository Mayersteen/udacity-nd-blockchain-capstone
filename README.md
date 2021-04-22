# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Test

The local test was preformed with the following ganache-cli parameters:
```
ganache-cli -m "candy maple cake sugar pudding cream honey rich smooth crumble s weet treat" -d -g 1 -l 999999999999999 -a 50 -e 1000000
```

Test Execution:
```
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang



  Contract: TestERC721Mintable
    match erc721 spec
      √ should return total supply (179ms)
      √ should get token balance (134ms)
      √ should return token uri (205ms)
      √ should transfer token from one owner to another (439ms)
    have ownership properties
      √ should fail when minting when address is not contract owner (246ms)
      √ should return contract owner (98ms)
      √ the contract owner can transfer the ownership (365ms)

  Contract: SolnSquareVerifier
    √ A new solution can be added (346ms)
    √ Existing solutions cannot be added (524ms)
    √ Should add a new ERC721 token can be added (2029ms)

  Contract: TestSquareVerifier
    √ Correct proof should be successfully verified (1132ms)
    √ False Proof must not be verified successfully (976ms)


  12 passing (24s)
```


# Rinkeby Deployment

```
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x2f2407529f7292ce20d9fec2ac0712473a20d328896cab881b37a253a0beea87
   > Blocks: 0            Seconds: 12
   > contract address:    0x49828bf0Af7522Ed5eC0793d166813B09C3f9de8
   > block number:        8458875
   > block timestamp:     1619117388
   > account:             0xb9b094e2FBa05aed9DEC6A258317171AD3F0e95b
   > balance:             10.651619248999900001
   > gas used:            226537 (0x374e9)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00226537 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00226537 ETH


2_deploy_contracts.js
=====================

   Deploying 'ERC721Mintable'
   --------------------------
   > transaction hash:    0x5dd32e05f0e3e085b35b1ed1b4fa06d5fa906baff807a35035e0a4492a53ec66
   > Blocks: 0            Seconds: 8
   > contract address:    0xa1922DE423b9Ce42ab5d01901391250785562e0B
   > block number:        8458877
   > block timestamp:     1619117418
   > account:             0xb9b094e2FBa05aed9DEC6A258317171AD3F0e95b
   > balance:             10.621479108999900001
   > gas used:            2968251 (0x2d4abb)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02968251 ETH


   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xc36c79253b92984f83420904a9d9bc67efe667ec2f598f360967253f660943b6
   > Blocks: 1            Seconds: 12
   > contract address:    0xBE701c1732e338bB345cD3cDcaac1A0f0ec127D3
   > block number:        8458878
   > block timestamp:     1619117433
   > account:             0xb9b094e2FBa05aed9DEC6A258317171AD3F0e95b
   > balance:             10.611800638999900001
   > gas used:            967847 (0xec4a7)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967847 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x2cc76c11f0c2fd958bfe69274f57a44ded27304519e05ade5b34a7ba786c1a1a
   > Blocks: 0            Seconds: 8
   > contract address:    0x906179b359927f3Ea9a6C2074F8D301B767924DF
   > block number:        8458879
   > block timestamp:     1619117448
   > account:             0xb9b094e2FBa05aed9DEC6A258317171AD3F0e95b
   > balance:             10.577246318999900001
   > gas used:            3455432 (0x34b9c8)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03455432 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0739153 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.07618067 ETH
```

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
