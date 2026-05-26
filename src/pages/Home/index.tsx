import Hero from "../../components/Home/Hero";
import Listagem from "../../components/Home/Listagem";
import type Item from "../../models/Item";
import sushi from "../../assets/sushi.png";
import macarrao from "../../assets/macarrao.png";
import { PageContainer } from "../../styles/main";

const list: Item[] = [
  {
    type: "Italiana",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    infos: ["Italiana"],
    image: `${macarrao}`,
    title: "La Dolce Vita Trattoria",
    rating: 4.6,
  },
  {
    type: "Japonesa",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da semana", "Japonesa"],
    image: `${sushi}`,
    title: "Hioki Sushi",
    rating: 4.9,
  },
  {
    type: "Italiana",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    infos: ["Italiana"],
    image: `${macarrao}`,
    title: "La Dolce Vita Trattoria",
    rating: 4.6,
  },
  {
    type: "Japonesa",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da semana", "Japonesa"],
    image: `${sushi}`,
    title: "Hioki Sushi",
    rating: 4.9,
  },
  {
    type: "Italiana",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    infos: ["Italiana"],
    image: `${macarrao}`,
    title: "La Dolce Vita Trattoria",
    rating: 4.6,
  },
  {
    type: "Japonesa",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da semana", "Japonesa"],
    image: `${sushi}`,
    title: "Hioki Sushi",
    rating: 4.9,
  },
  {
    type: "Italiana",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    infos: ["Italiana"],
    image: `${macarrao}`,
    title: "La Dolce Vita Trattoria",
    rating: 4.6,
  },
  {
    type: "Japonesa",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da semana", "Japonesa"],
    image: `${sushi}`,
    title: "Hioki Sushi",
    rating: 4.9,
  },
];

export function Home() {
  return (
    <>
      <PageContainer>
        <Hero />
        <div className="container">
          <Listagem itens={list} />
        </div>
      </PageContainer>
    </>
  );
}
