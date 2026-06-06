import Hero from "../../components/Home/Hero";
import Listagem from "../../components/Home/Listagem";
import { PageContainer } from "../../styles/main";
import { useGetRestaurantsQuery } from "../../services/api";
import { Loading } from "../../components/Loading";

export function Home() {
  const { data: restaurante, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PageContainer>
        <Hero />
        <div className="container">
          <Listagem itens={restaurante || []} />
        </div>
      </PageContainer>
    </>
  );
}
