pragma solidity >=0.4.21 <0.6.0;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./ERC721Mintable.sol";
import "./Verifier.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721Mintable {

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address account;
    }

    Verifier VerifierContract;

    // TODO define an array of the above struct
    Solution[] solutionsArray;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private solutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256 index, address account);
    event TokenMinted(uint256 index, address account);

    /**
    * @dev modifier to ensure that a solution is not already present
    */
    modifier solutionMustBeUnique(uint256 index, address account) {
        bytes32 key = keccak256(abi.encodePacked(index, account));
        require(solutions[key].account == address(0), "Solution is not unique");
        _;
    }

    // TODO Create a function to add the solutions to the array and emit the event
    constructor (
        address verifierContractAddress,
        string memory name, 
        string memory symbol
    )
        public
        ERC721Mintable(name, symbol)
    {
        VerifierContract = Verifier(verifierContractAddress);
    }

    /**
    * @dev function to add a solution
    */
    function addSolution(
        uint256 index, address account
    ) 
        external
        solutionMustBeUnique(index, account)
    {
        Solution memory solution = Solution({index:index,account:account});
        bytes32 key = keccak256(abi.encodePacked(index,account));
        solutions[key] = solution;
        solutionsArray.push(solution);
        emit SolutionAdded(index, account);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly

    function mintNewNFT(
        uint256[2] calldata a,
        uint256[2][2] calldata b,
        uint256[2] calldata c,
        uint256[2] calldata inputs,
        uint256 index,
        address account
    )
        external
        solutionMustBeUnique(index, account)
    {
        require(VerifierContract.verifyTx(a, b, c, inputs), "Solution could not be verified correctly");
        this.addSolution(index, account);
        super.mint(account, index);
        emit TokenMinted(index, account);
    }

}