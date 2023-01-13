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
              ? "https://raw.githubusercontent.com/fernandoigor/practices-bora-codar-product-card-react/main/src/assets/close-icon.png"
              : "https://raw.githubusercontent.com/fernandoigor/practices-bora-codar-product-card-react/main/src/assets/360-icon.png"
          }
        />
      </button>
      {previewAnimated ? (
        <Scene
          pathObj={
            "https://raw.githubusercontent.com/fernandoigor/practices-bora-codar-product-card-react/main/src/assets/sofa.obj"
          }
        />
      ) : (
        <img src="https://raw.githubusercontent.com/fernandoigor/practices-bora-codar-product-card-react/main/src/assets/sofa-static.png" />
      )}
    </div>
  );
};
