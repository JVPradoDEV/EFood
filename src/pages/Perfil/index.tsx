import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Prato, Restaurante } from "../Home";
import Header from "../../components/Perfil/Header";
import { Banner, ItemLi, ItensLoja, Loading } from "./styles";
import { PageContainer } from "../../styles/main";
import { Modal } from "../../components/Perfil/Modal";
import { Carrinho } from "../../components/Perfil/Carrinho";

// export type Props = {
//   restauranteInfos: Restaurante;
//   cardapioItens: Restaurante[];
// };

export function Perfil() {
  const { id } = useParams<{ id: string }>();
  const [restaurante, setRestaurante] = useState<Restaurante>();

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res));
  }, [id]);

  const [selectedItem, setSelectedItem] = useState<Prato | null>(null);

  if (!restaurante) {
    return (
      <>
        <div className="container">
          <Loading>Carregando. . .</Loading>
        </div>
      </>
    );
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
          {restaurante.cardapio.map((prato) => (
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
