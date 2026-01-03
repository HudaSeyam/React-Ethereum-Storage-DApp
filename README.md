# React & Ethereum Storage DApp

A simple decentralized application (DApp) that demonstrates the full workflow of developing, deploying, and interacting with a Solidity smart contract using a React frontend. The application enables users to store and retrieve a value on the Ethereum blockchain through a web interface.

This project is designed for educational and academic purposes, targeting beginners in Ethereum and decentralized application development.

## Features
- Create a smart contract using the Solidity programming language.
- Deploy the smart contract to a local blockchain.
- Interact with the smart contract via a web interface.
- Use Ganache for a personal blockchain to simulate Ethereum network.
- Run automated tests against the smart contract using Truffle.

## Project Structure 
- **contracts/**: Contains the Solidity contracts (SimpleStorage.sol).
- **migrations/**: Contains the migration scripts for deploying the contracts.
- **test/**: Contains the test files for the smart contracts.
- **client/**: The frontend code for interacting with the contract via a web interface.

## Prerequisites

Ensure the following tools are installed:

- Node.js and NPM  
- Truffle Framework  
  npm install -g truffle  
- Ganache (CLI or Desktop)
  npm install -g ganache-cli
- MetaMask browser extension  

## Getting Started

### Step 1: Clone the Repository

git clone https://github.com/HudaSeyam/React-Ethereum-Storage-DApp.git  
cd React-Ethereum-Storage-DApp  

### Step 2: Install Dependencies

npm install  
 
### Step 3: Add Ganache Network to MetaMask

To allow MetaMask to communicate with the local blockchain, Ganache must be added as a custom network.

1. Open MetaMask.
2. Click the network selector and choose “Add Network” then “Add a network manually”.
3. Enter the following details:

Network Name: Ganache Local Network  
RPC URL: http://127.0.0.1:7545  
Chain ID: 1337 or 5777 (as shown in Ganache)  
Currency Symbol: ETH  

4. Save the network and switch MetaMask to Ganache Local Network.

### Step 4: Import a Ganache Account into MetaMask

MetaMask must control one of Ganache’s accounts in order to sign transactions.

1. Open Ganache and copy the private key of any generated account.
2. Open MetaMask and make sure it is connected to the Ganache Local Network.
3. Click the account icon, select “Import Account”.
4. Choose “Private Key”, paste the copied key, and confirm.
5. Verify that the account balance matches the balance shown in Ganache.

Security Note:  
Private keys must only be used in local development environments. Never expose or reuse them on public or production networks.

### Step 5: Compile and Deploy the Smart Contract

truffle compile  
truffle migrate  

### Step 6: Run Smart Contract Tests

truffle test  

### Step 7: Run the React Application

npm start  

The application will be available at:  
http://localhost:3000  

MetaMask will automatically prompt for transaction approval when interacting with the smart contract.

## Using the DApp

Once the setup is complete, users can store a value on the Ethereum blockchain, retrieve the stored value through the React interface, and approve and sign transactions using MetaMask.

## Presentation

A detailed explanation of blockchain fundamentals and this DApp is available at:  
https://www.slideshare.net/slideshow/blockchain-technology-and-how-to-build-your-first-decentralized-application/284884327

