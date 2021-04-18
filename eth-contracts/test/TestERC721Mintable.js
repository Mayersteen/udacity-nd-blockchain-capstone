//var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');
var ERC721Mintable = artifacts.require('ERC721Mintable');

const BASE_TOKEN_URI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[3];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.new("My Test Token", "MTT", {from: account_one});

            await this.contract.mint(account_two, 1);
            await this.contract.mint(account_two, 2);
            await this.contract.mint(account_three, 3);
            await this.contract.mint(account_four, 4);

        })

        it('should return total supply', async function () { 
            let supply = await this.contract.totalSupply();
            assert.equal(supply, 4, "Total token supply must be 4.");
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf(account_two);
            assert.equal(balance, 2, "Account 2 must hold 2 tokens.");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = await this.contract.tokenURI(1);
            let expectedURI = BASE_TOKEN_URI+"1";
            assert.equal(tokenURI, expectedURI, "Token URI concatenation must work as expected.");
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_two, account_three, 2, {from: account_two});
            let newOwner = await this.contract.ownerOf(2);
            assert.equal(newOwner, account_three, "Token 2 must now be owned by account_three.");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.new("My Test Token", "MTT", {from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let error_thrown = false;

            try {
                await this.contract.mint(account_three, 20, {from: account_two});
            } catch(e) {
                error_thrown = true;
            }

            assert.equal(error_thrown, true, "minting must fail if the msg.sender is not the contract owner.");
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.owner();
            assert(owner, account_one, "Owner is not account_one.");
        })

        it('the contract owner can transfer the ownership', async function () {
            await this.contract.transferOwnership(account_two, {from:account_one});
            let newOwner = await this.contract.owner();
            assert(newOwner, account_two, "Ownership was transferred to account_two");
        })

    });
})