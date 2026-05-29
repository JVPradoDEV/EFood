import { useEffect, useState } from "react";
import Hero from "../../components/Home/Hero";
import Listagem from "../../components/Home/Listagem";
import { PageContainer } from "../../styles/main";

export type Restaurante = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Prato[];
};

export type Prato = {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
};

export function Home() {
  const [restaurante, setRestaurante] = useState<Restaurante[]>([]);

  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurante(res));
  });

  return (
    <>
      <PageContainer>
        <Hero />
        <div className="container">
          <Listagem itens={restaurante} />
        </div>
      </PageContainer>
    </>
  );
}
