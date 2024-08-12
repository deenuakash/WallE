import { Button } from "@/components/ui/button";
import useMnemonic from "@/hooks/useMnemonic";
import { useState } from "react";

type GenerateSeedProps = {
    copyMnemonics: () => void;
  };

const GenerateSeed = ({copyMnemonics}) => {
  const [secret, setSecret] = useState<string[]>([]);
  const { getMnemonic, getSeed, validateSecret, generateKeyPair } =
    useMnemonic();

  const generateMnemonics = () => {
    const mnemonic = getMnemonic();
    setSecret(mnemonic);
  };

  return (
    <>
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
    </>
  );
};

export default GenerateSeed;
