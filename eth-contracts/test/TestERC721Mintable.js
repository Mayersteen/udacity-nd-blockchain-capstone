//var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');
var ERC721Mintable = artifacts.require('ERC721Mintable');

// As described in https://medium.com/fredwong-it/faker-useful-library-for-unit-and-integration-testing-b6d5458b0e7f
// for generating random uuids. Updated due to deprecation notice:
// Deprecation Warning: faker.random.uuid is now located in faker.datatype.uuid
const faker = require('faker');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    // To simulate the contract owner
    const owner = accounts[0];

    // Big Number Module
    const BN = web3.utils.BN;

    // Token Metadata
    const tokenName = "My Test Token";
    const tokenSymbol = "MTT";
    const BASE_TOKEN_URI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";
    
    // Token Limits
    const ACCOUNT_TOKEN_HOLDERS = 3;
    const ACCOUNT_TOKEN_LIMIT = 3;

    // Define variables that will be used during the tests
    let total_supply;
    let tokenId;
    let allTokenURI;
        
    describe('match erc721 spec', function () {
        beforeEach(async function () { 

            this.contract = await ERC721Mintable.new(tokenName, tokenSymbol, {from: account_one});

            // Initialize test variables
            total_supply = 0;
            tokenId = 0;
            allTokenURI = {};

            // Initialize to false, to indicate that no error was thrown
            let error_thrown = false;

            try{

                for (let account = 1; account <= ACCOUNT_TOKEN_HOLDERS; account++) {
                    // mint multiple tokens
                    let accountURI = [];

                    for (let c = 1; c <= ACCOUNT_TOKEN_LIMIT; c++) {
                        const tokenURI = faker.datatype.uuid();
                        await this.contract.mint(accounts[account], ++tokenId, tokenURI);
                        accountURI.push({tokenId, tokenURI, fullURI:`${BASE_TOKEN_URI}${tokenURI}`});
                        total_supply++;
                    }
                    allTokenURI[account] = (accountURI);
                }

            } catch(e) {
                error_thrown = true;
                console.error(e);
            }
        })

        it('should return total supply', async function () { 
            
        })

        it('should get token balance', async function () { 
            
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            
        })

        it('should transfer token from one owner to another', async function () { 
            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.new(tokenName, tokenSymbol, {from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            
        })

        it('should return contract owner', async function () { 
            
        })

    });
})