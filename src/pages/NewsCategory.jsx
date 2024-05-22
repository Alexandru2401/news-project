import React from "react";
import Layout from "../components/Layout";
import { useParams, useSearchParams } from "react-router-dom";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsList } from "../api/adaptors";
import { Container } from "react-bootstrap";
import NewsCardList from "../components/NewsCardList";
import NewsPagination from "../components/NewsPagination";
export default function NewsCategory() {
  // Extrag parametrul categoryId din url
  const { categoryId } = useParams();
  // Extrag querry params din url
  const [queryParams] = useSearchParams();
  let currentPage = queryParams.get('page');
  // Daca nu avem query params in url, inseamna ca suntem pe pag principala de categorie
  if(!currentPage){
    currentPage = 1;
  }
  // Generez link-ul pt categoria curenta
  const newsCategoryEndpoints = getNewsCategoriesEndpoint(categoryId, currentPage);
  // Fac fetch la date de la The Guardian server
  const news = useFetch(newsCategoryEndpoints);
  // Adaptez datele primite de la server
  const adaptedNewsList = getNewsList(news);
  let pageTitle = "";
  switch (categoryId) {
    case "technology":
      pageTitle = "Tech";
      break;
    case "football":
      pageTitle = "Football";
      break;
    default:
      break;
  }

  return (
    <Layout>
      <Container>
        <h1 className="mb-5 pt-3">{pageTitle}</h1>
        {/* Afisez stirile despre tehnologie*/}
        <NewsCardList newsList={adaptedNewsList} />
        {/* Afisam paginarea */}
        <NewsPagination active={currentPage} baseUrl={`/category/${categoryId}`}/>
      </Container>
    </Layout>
  );
}
