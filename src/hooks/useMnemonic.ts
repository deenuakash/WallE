import { generateMnemonic, mnemonicToSeedSync, validateMnemonic } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

const useMnemonic = () => {
  // Generate Mnemonic
  const getMnemonic = () => {
    const mnemonic = generateMnemonic();
    return mnemonic.split(" ");
  };

  // Generate Seed
  const getSeed = (mnemonicArr: Array<string>) => {
    const mnemonic = mnemonicArr.join("");
    return mnemonicToSeedSync(mnemonic);
  };

  // Validate Mnemonic
  const validateSecret = (mnemonicArr: Array<string>) => {
    const mnemonic = mnemonicArr.join(" ");
    return validateMnemonic(mnemonic);
  };

  // Generate Keypair
  const generateKeyPair = (index: number, seed: Buffer) => {
    const derivationPath = `m/44'/501'/${index}'/0'`;
    const derivedSeed = derivePath(derivationPath, seed.toString("hex")).key;
    const keypair = {
      publicKey: Keypair.fromSeed(derivedSeed).publicKey,
      secretKey: bs58.encode(Keypair.fromSeed(derivedSeed).secretKey)
    }
    return { keypair, derivationPath };
  };

  return { getMnemonic, getSeed, validateSecret, generateKeyPair };
};

export default useMnemonic;
