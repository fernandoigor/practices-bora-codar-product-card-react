import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";

export interface ObjectPathInterface {
  pathObj: string;
}
export default function Object({ pathObj }: ObjectPathInterface) {
  const obj = useLoader(OBJLoader, pathObj);
  return <primitive object={obj} />;
}
