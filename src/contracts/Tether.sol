pragma solidity >=0.5.5;

contract Tether {
    string public name = 'Mock Tether Token';
    string public symbol = 'USDT';
    uint256 public totalSupply = 1000000000000000000000000; // 1 million tokens
    // ETH has 18 decimals, same with DAI, Tether(USDT)
    uint8 public decimals = 18;

    // constructor() public {

    // }
}