# React and Ethereum Storage DApp

A basic decentralized application (DApp) that demonstrates how to create, deploy, and interact with a Solidity smart contract on a blockchain. 
This DApp uses the Ethereum blockchain and allows users to store and retrieve values from the contract.

## Features

- Create a smart contract using the Solidity programming language.
- Deploy the smart contract to a local blockchain.
- Interact with the smart contract via a web interface.
- Use Ganache for a personal blockchain to simulate Ethereum network.
- Run automated tests against the smart contract using Truffle.
  
## PowerPoint Presentation

For a detailed overview of how the application works, please refer to the PowerPoint presentation that demonstrates the DApp setup and functionality:  
[Blockchain Development Kit - PowerPoint](https://www.slideshare.net/slideshow/blockchain-development-kitpptx/258277340)

## Project Structure
- **contracts/**: Contains the Solidity contracts (Storage.sol).
- **migrations/**: Contains the migration scripts for deploying the contracts.
- **test/**: Contains the test files for the smart contracts.
- **src/**: The frontend code for interacting with the contract via a web interface.
  
## Prerequisites

Before you begin, make sure you have the following installed on your machine:

1. **Node.js** and **Node Package Manager (NPM)**: These are required to run the DApp.
2. **Truffle Framework**: A suite of tools for developing Ethereum smart contracts.
   ```bash
   npm install -g truffle
   ```
3. **Ganache**: A personal blockchain for Ethereum development. You can download the desktop version or install the CLI version.
4. **MetaMask**: An Ethereum wallet extension for Google Chrome that allows you to interact with the DApp.

## Getting Started

Follow these steps to set up and run the Simple Storage DApp locally.

### 1. Clone the Repository

First, clone the project to your local machine:
```bash
git clone https://github.com/HudaSeyam/React-Ethereum-Storage-DApp.git
cd react-ethereum-storage-dapp
```
### 2. Install Dependencies

Once inside the project directory, install the required dependencies using Node Package Manager (NPM):
```bash
npm install
```
### 3. Install Ganache

Ganache is required as your personal Ethereum blockchain for local development. You can either install the desktop version or use the CLI version.
```bash
npm install -g ganache-cli
```
Once installed, start Ganache to simulate the blockchain:
```bash
ganache-cli
```
### 4. Configure MetaMask

To interact with your DApp through the browser, install the MetaMask extension for Google Chrome.
After installation:

- Connect MetaMask to the Ganache network (usually http://127.0.0.1:7545).
- Import an account from Ganache by using the private key from one of the accounts listed in the Ganache terminal.

### 5. Compile and Migrate Smart Contract

Use the Truffle Framework to compile the Solidity smart contract and deploy it to your local blockchain (Ganache):
```bash
truffle compile
truffle migrate
```
- truffle compile: Compiles the Solidity contract (Storage.sol).
- truffle migrate: Deploys the contract to the blockchain (in this case, Ganache).
  
### 6. Running Tests

Run the automated tests to verify that the smart contract works as expected:
```bash
truffle test
```
### 7. Interacting with the Smart Contract

You can interact with the smart contract using a web interface. The web interface allows users to store and retrieve values from the contract.
- First, ensure you have MetaMask connected to the local Ganache blockchain.
- Run the React Development Server:
  This will run the React development server, and the app will be available at http://localhost:3000.
  ```bash
   npm start
  ```
