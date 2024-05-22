import React, { useContext } from "react";
import Layout from "../components/Layout";
import { FavouriteContext } from "../store/Favorites/context";
import { Container } from "react-bootstrap";
import NewsCardList from "../components/NewsCardList";
export default function Favourite() {
  // Extrag state-ul de stiri favorite
  const { favouritesState } = useContext(FavouriteContext);
  const { news } = favouritesState;
  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">Stirile tale favorite</h1>
        {/* Afisam stirile favorite pe ecran */}
        {news.length === 0 ? (
          <p>Momentan nu ai nici o stire favorita</p>
        ) : (
          <NewsCardList newsList={news} />
        )}
      </Container>
    </Layout>
  );
}
