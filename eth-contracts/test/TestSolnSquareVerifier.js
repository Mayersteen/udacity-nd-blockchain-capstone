const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier");
const Verifier = artifacts.require("./Verifier.sol");
const truffleAssert = require("truffle-assertions");

contract("SolnSquareVerifier", accounts => {
	
    const account_one = accounts[0];
    const account_two = accounts[1];

	beforeEach(async function () {
		this.VerifierContract = await Verifier.new({from: account_one});
		this.contract = await SolnSquareVerifier.new(
			this.VerifierContract.address,
			"My Test Token",
			"MTT",
			{ 
				from: account_one 
			}
		);
	});

	// Test if a new solution can be added for contract - SolnSquareVerifier
	it("A new solution can be added", async function () {
		const tx = await this.contract.addSolution(1, account_two);
		await truffleAssert.eventEmitted(tx, "SolutionAdded");
	});

	it("Existing solutions cannot be added", async function () {
		
        let error_thrown = false;
		
        const tx = await this.contract.addSolution(1, account_two);
        await truffleAssert.eventEmitted(tx, "SolutionAdded");
		
        try {
			tx = await this.contract.addSolution(1, account_two);
		} catch (e) {
			error_thrown = true;
		}

		assert(error_thrown, false, "An already existing solution could be added again, which is not allowed.");
	});

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
	it("Should add a new ERC721 token can be added", async function () {
		const { proof, inputs } = require("../../zokrates/code/square/proof.json");
		
        const tx = await this.contract.mintNewNFT(proof.a, proof.b, proof.c, inputs, 1, accounts[1]);
		await truffleAssert.eventEmitted(tx, "SolutionAdded");
		await truffleAssert.eventEmitted(tx, "TokenMinted");
	});
});