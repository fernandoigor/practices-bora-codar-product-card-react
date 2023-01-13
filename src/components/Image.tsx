import { useState } from "react";
import Scene from "./Scene";

export const Imagem = () => {
  const [previewAnimated, setPreviewAnimated] = useState(false);

  const handle360Image = () => {
    setPreviewAnimated((prev) => !prev);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <button className="ml-auto" onClick={handle360Image}>
        <img
          src={
            previewAnimated
              ? "/src/assets/close-icon.png"
              : "/src/assets/360-icon.png"
          }
        />
      </button>
      {previewAnimated ? (
        <Scene pathObj={"src/assets/sofa.obj"} />
      ) : (
        <img src="/src/assets/sofa-static.png" />
      )}
    </div>
  );
};
