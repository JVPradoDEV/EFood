import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Perfil/Header";
import { PageContainer } from "../../styles/main";
import { Modal } from "../../components/Perfil/Modal";
import { Carrinho } from "../../components/Perfil/Carrinho";
import { Banner, ItemLi, ItensLoja } from "./styles";
import { useGetRestaurantQuery } from "../../services/api";
import { Loading } from "../../components/Loading";

type ProductParams = {
  id: string;
};

export function Perfil() {
  const { id } = useParams() as ProductParams;

  const { data: restaurante, isLoading } = useGetRestaurantQuery(id);

  const [selectedItem, setSelectedItem] = useState<Prato | null>(null);

  if (isLoading) {
    return <Loading />;
  }

  const getDescricao = (texto: string) => {
    if (texto && texto.length > 115) {
      return texto.slice(0, 107) + ". . .";
    }
    return texto;
  };

  return (
    <PageContainer>
      <Carrinho />
      <Header />
      <Banner $bgImage={restaurante?.capa}>
        <div className="containerPerfil">
          <h2>{restaurante?.tipo}</h2>
          <h3>{restaurante?.titulo}</h3>
        </div>
      </Banner>
      <div className="containerPerfil">
        <ItensLoja>
          {restaurante!.cardapio.map((prato) => (
            <ItemLi key={prato.id}>
              <img src={prato.foto} />
              <h3>{prato.nome}</h3>
              <p>{getDescricao(prato.descricao)}</p>
              <button onClick={() => setSelectedItem(prato)}>
                Mais Detalhes
              </button>
            </ItemLi>
          ))}
        </ItensLoja>
      </div>

      {selectedItem && (
        <Modal prato={selectedItem} fecharModal={() => setSelectedItem(null)} />
      )}
    </PageContainer>
  );
}
