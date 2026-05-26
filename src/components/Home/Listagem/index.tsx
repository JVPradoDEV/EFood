import Card from "../../../containers/Card";
import type Item from "../../../models/Item";
import { ListUl } from "./styles";

export type Props = {
  itens: Item[];
};

const Listagem = ({ itens }: Props) => {
  return (
    <ListUl>
      {itens.map((item) => (
        <Card
          key={item.title}
          type={item.type}
          description={item.description}
          infos={item.infos}
          image={item.image}
          title={item.title}
          rating={item.rating}
        />
      ))}
    </ListUl>
  );
};

export default Listagem;
