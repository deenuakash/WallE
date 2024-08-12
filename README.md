# Wall-E: Solana HD Wallet

This project, **Wall-E**, is a React-based HD wallet for Solana, built with modern tools like Vite, TypeScript, TailwindCSS, and shadcn. It allows users to generate mnemonic phrases and convert those phrases into keypairs using BIP standards.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
  - [Generating a Mnemonic Phrase](#generating-a-mnemonic-phrase)
  - [Converting Mnemonic to Keypairs](#converting-mnemonic-to-keypairs)
- [Understanding BIPs](#understanding-bips)
  - [BIP-39](#bip-39)
  - [BIP-32](#bip-32)
  - [BIP-44](#bip-44)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Demo

(Include a link to your deployed project here, if applicable)

## Features

- **HD Wallet Creation**: Generate mnemonic phrases and derive multiple Solana keypairs.
- **Secure Key Management**: Display public keys and hide/show secret keys.
- **Responsive UI**: Built with TailwindCSS and shadcn components.
- **TypeScript Support**: Strong typing for improved developer experience.

## Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Component Library**: [shadcn](https://github.com/shadcn/ui)
- **Solana Utilities**: [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/) and [ed25519-hd-key](https://www.npmjs.com/package/ed25519-hd-key)
- **Mnemonic Generation**: [bip39](https://www.npmjs.com/package/bip39)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
  
   git clone https://github.com/deenuakash/WallE.git
   cd WallE

2. Install dependencies:
    npm install

3. Run the development server:
    npm run dev

## Usage

### Generating a Mnemonic Phrase

1. Open the application in your browser.
2. Click on the "Generate Mnemonic" button to create a new mnemonic phrase.
3. The generated phrase will be displayed on the screen. You can copy it using the provided copy button.

### Converting Mnemonic to Keypairs

1. After generating a mnemonic phrase, input it into the provided textarea.
2. Click the "Generate Keypair" button to derive a Solana keypair from the mnemonic.
3. The application will display the derived keypair's public key, secret key (with the option to hide/show), and derivation path.

## Understanding BIPs

### BIP-39: Mnemonic Phrases

**BIP-39** defines a standard for generating mnemonic phrases from random entropy, which are easier for humans to read and remember. The mnemonic phrase is then converted to a binary seed, which can be used to derive deterministic wallets. This project uses BIP-39 to generate mnemonic phrases, ensuring compatibility with other BIP-39 compliant wallets.

- **Example**: `abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about`

### BIP-32: Hierarchical Deterministic Wallets

**BIP-32** introduces the concept of Hierarchical Deterministic (HD) wallets, allowing the creation of a tree of keypairs from a single seed. This enables the generation of child keys from parent keys, facilitating wallet backups and secure key management.

- **Key Features**:
  - **Master Node**: The root key from which all other keys are derived.
  - **Child Key Derivation**: Allows for the creation of new keypairs without requiring access to the parent private key.

### BIP-44: Multi-Account Hierarchy for Deterministic Wallets

**BIP-44** builds on BIP-32 by defining a specific path structure for generating different accounts, addresses, and keys. This standardization is especially useful for wallets that need to manage multiple cryptocurrencies or accounts.

- **Derivation Path Format**: `m / purpose' / coin_type' / account' / change / address_index`
  - **Purpose**: Always `44'` for BIP-44.
  - **Coin Type**: A specific identifier for the cryptocurrency (e.g., `501'` for Solana).
  - **Account**: Allows for multiple accounts per coin type.
  - **Change**: Differentiates between external and internal addresses.
  - **Address Index**: The index of the address within the account.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Lints the TypeScript code.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any features, improvements, or bug fixes.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
