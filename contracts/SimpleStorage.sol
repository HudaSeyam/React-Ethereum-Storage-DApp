// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
contract SimpleStorage {
    uint256 private storedNumber;

    function setNumber(uint256 _number) external {
        storedNumber = _number;
    }

    function getNumber() external view returns (uint256) {
        return storedNumber;
    }
}
