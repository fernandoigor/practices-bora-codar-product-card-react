import { Button } from "./Button";
import { Imagem } from "./Image";

export const Card = () => {
  return (
    <div className="bg-[#d9cef9] w-[878px] h-[495px] rounded-xl flex flex-row justify-around">
      <div className="flex justify-center w-full">
        <Imagem />
      </div>
      <div className="ml-8 flex flex-col justify-center items-start gap-1  w-full ">
        <span className="text-xs font-thin">CÓDIGO 41223</span>
        <h1 className="text-3xl font-serif font-bold">Sofá Margot II - Rosé</h1>
        <span className="text-md font-extralight">R$ 4.000</span>
        <Button>ADCIONAR À CESTA</Button>
      </div>
    </div>
  );
};
