// src/App.js
import React, { useState } from 'react';
import { generateMnemonic, mnemonicToSeed } from 'bip39';
import { Keypair } from '@solana/web3.js';

function App() {
  const [mnemonic, setMnemonic] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [inputMnemonic, setInputMnemonic] = useState('');

  const generateMnemonicSeed = () => {
    const newMnemonic = generateMnemonic();
    setMnemonic(newMnemonic);
    generateKeypairFromMnemonic(newMnemonic);
  };

  const generateKeypairFromMnemonic = async (mnemonic) => {
    try {
      const seed = await mnemonicToSeed(mnemonic);
      const keypair = Keypair.fromSeed(seed.slice(0, 32)); // Solana keypair requires a 32-byte seed
      setPublicKey(keypair.publicKey.toBase58());
      setPrivateKey(keypair.secretKey.toString('hex'));
    } catch (error) {
      console.error('Error generating keypair:', error);
    }
  };

  const handleGenerateFromInput = () => {
    generateKeypairFromMnemonic(inputMnemonic);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Solana Wallet Generator</h1>

        {/* Button to generate mnemonic seed */}
        <div className="mb-4">
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={generateMnemonicSeed}
          >
            Generate Mnemonic and Keypair
          </button>
        </div>

        {/* Display generated mnemonic */}
        {mnemonic && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Mnemonic Seed:</h2>
            <textarea
              value={mnemonic}
              readOnly
              className="w-full h-24 p-2 border border-gray-300 rounded"
            />
          </div>
        )}

        {/* Input for pasted mnemonic */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Enter Mnemonic Seed:</h2>
          <textarea
            value={inputMnemonic}
            onChange={(e) => setInputMnemonic(e.target.value)}
            placeholder="Paste your mnemonic seed here..."
            className="w-full h-24 p-2 border border-gray-300 rounded"
          />
          <button
            className="mt-2 w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            onClick={handleGenerateFromInput}
          >
            Generate Keypair from Input
          </button>
        </div>

        {/* Display public key */}
        {publicKey && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Public Key:</h2>
            <p className="p-2 bg-gray-200 rounded">{publicKey}</p>
          </div>
        )}

        {/* Display private key */}
        {privateKey && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Private Key:</h2>
            <p className="p-2 bg-gray-200 rounded">{privateKey}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
