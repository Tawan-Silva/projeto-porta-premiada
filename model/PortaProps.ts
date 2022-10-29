import PortaModel from "./PortaModel";

export interface PortaProps {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}
