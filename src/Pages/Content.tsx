import { useState } from "react";
import useMnemonic from "../hooks/useMnemonic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import WalletCard from "@/components/WalletCard";

type KeypairInfo = {
  account: number;
  publicKey: string;
  secretKey: string;
  derivationPath: string;
};

const Content = () => {
  const [secret, setSecret] = useState<string[]>([]);
  const [inputSecret, setInputSecret] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [keyPairs, setKeyPairs] = useState<KeypairInfo[]>([]);
  const [inputKeyPairs, setInputKeyPairs] = useState<KeypairInfo[]>([]);
  const { getMnemonic, getSeed, validateSecret, generateKeyPair } =
    useMnemonic();

  const generateMnemonics = () => {
    const mnemonic = getMnemonic();
    setSecret(mnemonic);
    setKeyPairs([]);
    setIndex(0);
  };

  const setInputMnemonic = (input: string) => {
    input.trim();
    setInputSecret(input.split(" "));
  };

  const copyMnemonics = () => {
    navigator.clipboard.writeText(secret.join(" "));
  };

  const generateKeyPairs = (mnemonic: string[]) => {
    if (!validateSecret(mnemonic)) {
      alert("Invalid Secret");
      return;
    }
    setIndex((prev) => prev + 1);
    const seed = getSeed(mnemonic);
    const { keypair, derivationPath } = generateKeyPair(index, seed);
    setKeyPairs((prevKeypairs: KeypairInfo[]) => [
      ...prevKeypairs,
      {
        account: index,
        publicKey: keypair.publicKey.toBase58(),
        secretKey: keypair.secretKey,
        derivationPath,
      },
    ]);
  };

  const generateKeyPairsExisting = (mnemonic: string[]) => {
    if (!validateSecret(mnemonic)) {
      alert("Invalid Secret");
      return;
    }
    setIndex((prev) => prev + 1);
    const seed = getSeed(mnemonic);
    const { keypair, derivationPath } = generateKeyPair(index, seed);
    setInputKeyPairs((prevInputKeypairs: KeypairInfo[]) => [
      ...prevInputKeypairs,
      {
        account: index,
        publicKey: keypair.publicKey.toBase58(),
        secretKey: keypair.secretKey,
        derivationPath,
      },
    ]);
  };

  const handleExistingSeed = () => {
    setInputSecret([])
    setInputKeyPairs([]);
    setIndex(0);
  };

  return (
    <>
      <div className="">
        <h2 className="text-xl text-center font-semibold mt-4 md:text-2xl xl:text-3xl">
          Secret Recovery Phrase{" "}
          <span className="font-normal text-sm">
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="text-gray-300 cursor-pointer">&#x1F6C8;</span>
              </HoverCardTrigger>
              <HoverCardContent className="text-sm text-left">
                A Secret Recovery Phrase is a sequence of words that serves as
                the master key to access and recover your cryptocurrency wallet,
                and must be kept secure and private.
              </HoverCardContent>
            </HoverCard>
          </span>
        </h2>
        <p className="text-gray-400 text-md text-center py-4 mb-4 md:text-xl md:px-4 lg:px-24">
          Never store your Secret Recovery Phrase digitally or share it with
          anyone, as this can lead to complete loss of your funds if
          compromised.
        </p>
        <Tabs defaultValue="existing">
          <TabsList className="grid grid-cols-2 bg-gray-400">
            <TabsTrigger value="existing" onClick={handleExistingSeed}>
              Use Existing Seed
            </TabsTrigger>
            <TabsTrigger value="generate" onClick={generateMnemonics}>
              Generate Seed
            </TabsTrigger>
          </TabsList>
          <TabsContent value="generate">
            <div
              className="bg-slate-900 mt-8 mb-4 py-2 cursor-pointer"
              onClick={copyMnemonics}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 font-mono p-4 rounded-lg">
                {secret?.map((val, i) => (
                  <span
                    className="relative bg-slate-950 flex items-center list-none justify-center  py-2  border rounded-lg border-dashed border-slate-700"
                    key={i}
                  >
                    <span className="absolute top-0 left-0 text-gray-500 px-1 text-xs">{`${
                      i + 1
                    }`}</span>
                    {val}
                  </span>
                ))}
              </div>
              <p className="text-center text-gray-500 text-sm">
                Click anywhere on this card to copy
              </p>
            </div>
            <div className="text-center">
              <Button
                variant="secondary"
                className="w-full lg:w-auto px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2"
                onClick={() => generateKeyPairs(secret)}
              >
                <span className="text-white">Generate Keys</span>
              </Button>
            </div>
            {keyPairs.map((keypair) => (
              <WalletCard keypair={keypair} key={keypair.account} />
            ))}
          </TabsContent>
          <TabsContent value="existing">
            <div className="pt-6 pb-4 text-black">
              <Textarea
                placeholder="Enter your mnemonic seed here.."
                id="message"
                value={inputSecret.join(" ")}
                onChange={(e) => setInputMnemonic(e.target.value)}
              />
            </div>
            <div className="text-center">
              <Button
                variant="secondary"
                disabled={inputSecret.filter((val) => val).length !== 12}
                onClick={() => generateKeyPairsExisting(inputSecret)}
                className="w-full lg:w-auto px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 "
              >
                <span className="text-white">Generate Keys</span>
              </Button>
            </div>
            {inputKeyPairs.map((keypair) => (
              <WalletCard keypair={keypair} key={keypair.account} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Content;
