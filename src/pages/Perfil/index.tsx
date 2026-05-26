import { useState } from "react";
import { Banner, ItemLi, ItensLoja } from "./styles";
import { PageContainer } from "../../styles/main";
import macarrao from "../../assets/macarrao.png";
import pizza from "../../assets/pizza.png";
import sushi from "../../assets/sushi.png";
import Header from "../../components/Perfil/Header";
import { useParams } from "react-router-dom";
import { Modal } from "../../components/Perfil/Modal";
import type { Prato } from "../../models/Prato";
import { Carrinho } from "../../components/Perfil/Carrinho";

const dadosRestaurantes = {
  italiana: {
    type: "Italiano",
    title: "La Dolce Vita Trattoria",
    bannerImg: macarrao,
    itens: Array.from({ length: 6 }, (_, index) => ({
      id: index,
      name: "Pizza Marguerita",
      description:
        "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      image: pizza,
      descriptionPlus:
        "A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.",
      price: 60.9,
    })),
  },
  japonesa: {
    type: "Japonesa",
    title: "Hioki Sushi",
    bannerImg: sushi,

    itens: Array.from({ length: 6 }, (_, index) => ({
      id: index,
      name: "Combo Sushi",
      description:
        "Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis para sua refeição.",
      descriptionPlus:
        "Neste combinado, temos cortes precisos e delicados de sashimi, pensados para derreter na boca e evidenciar a pureza e a textura natural dos pescados frescos do dia. Ao centro, os niguiris repousam sobre uma base de shari – o arroz temperado na medida exata –, criando o equilíbrio perfeito entre a acidez suave do vinagre e a untuosidade do peixe.",
      image: sushi,
      price: 30.9,
    })),
  },
};

type PerfilParams = {
  tipo: "italiana" | "japonesa";
};

export function Perfil() {
  const { tipo } = useParams<PerfilParams>();

  const [selectedItem, setSelectedItem] = useState<Prato | null>(null);

  if (!tipo || !dadosRestaurantes[tipo]) {
    return <h2>Restaurante não encontrado!</h2>;
  }

  const restaurante = dadosRestaurantes[tipo];

  return (
    <PageContainer>
      <Carrinho />
      <Header />
      <Banner $bgImage={restaurante.bannerImg}>
        <div className="containerPerfil">
          <h2>{restaurante.type}</h2>
          <h3>{restaurante.title}</h3>
        </div>
      </Banner>
      <div className="containerPerfil">
        <ItensLoja>
          {restaurante.itens.map((item) => (
            <ItemLi key={item.id}>
              <img src={item.image} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button onClick={() => setSelectedItem(item)}>
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
