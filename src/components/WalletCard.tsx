import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

type keypairInfo = {
  account: number;
  publicKey: string;
  secretKey: string;
  derivationPath: string;
};

const WalletCard: React.FC<{ keypair: keypairInfo }> = ({keypair}) => {

  const [showPrivateKey, setShowPrivateKey] = useState(false);
  return (
    <>
      <Card
        key={keypair.account}
        className="bg-slate-900 mt-8 mb-4 py-2 text-white"
      >
        <CardHeader>
          <CardTitle className="text-sm font-semibold truncate md:text-md xl:text-lg">
            {keypair.publicKey}
          </CardTitle>
          <CardDescription>{keypair.derivationPath}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="truncate cursor-pointer" onClick={() => setShowPrivateKey(!showPrivateKey)}>
            <span className="text-gray-400">Secret Key:</span>{" "}
            {showPrivateKey ? keypair.secretKey : '••••••••••••••'}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default WalletCard;
