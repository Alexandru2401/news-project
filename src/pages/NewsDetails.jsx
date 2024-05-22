import React, { useContext } from "react"
import Layout from "../components/Layout"
import { useParams } from "react-router-dom"
import { getNewsDetailsEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsDetails } from "../api/adaptors";
import { getFormatedDate } from "../utils/date";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./newsDetails.css";
import  { addToFavourites } from '../store/Favorites/actions'
import { FavouriteContext } from "../store/Favorites/context";
export default function NewsDetails(){
    // Extrag functia care imi modifica state-ul global de stiri favorite
    const {favouriteDispatch} = useContext(FavouriteContext);
    //Extrag newsId-ul din url
    let {newsId} = useParams();
    // Avand in vedere ca am codificat id-ul in newsCard.jsx, acum trb sa-l decodific ca sa-l pot trimite la Api 
    newsId = decodeURI(newsId);
    // Generez endpoint-ul pt detaliile stirii
    const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);
    // Cerem datele stirii de la server
    const newsDetails = useFetch(newsDetailsEndpoint);
    // Adaptez datele de la server in functie de datele necesare componentei 
    const adaptedNewsDetails = getNewsDetails(newsDetails);
    // Extrag cheile din adaptedNewsDetails, folosind object destructuring
    const {author, content, date, description, image, thumbnail, title} = adaptedNewsDetails;
    // Formatez data primita de la API catre formatul: zi/luna/an
    const formatedDate = getFormatedDate(date);
    
    function handleAddToFavourites(news){
        // Apelez actiunea de adaugare la favorite
        const actionResult = addToFavourites(news);
        favouriteDispatch(actionResult);
    }

    
    return (
      <Layout>
          <Container className="newsDetails my-5">
              <Row className="d-flex justify-content-center">
                <Col xs={12} lg={8}>
                  <h1 className="pt-3 mb-5">{title}</h1>
                  <p className="fw-bold">{description}</p>
                  {/* De la API primim imaginea sub forma de tag-uri de html, iar pt a le afisa pe ecran, in react avem nev de prop-ul dangerouslySetInnerHTML - echivalentul innerHTML */}
                  <div dangerouslySetInnerHTML={{__html: image}} className="mb-4"></div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="fw-bold">
                      <p>{author}</p>
                      <p className="mb-0">{formatedDate}</p>
                    </div>
                    <Button onClick={()=>{
                      // Construiesc payload-ul actiunii de adaugare stire la favorite
                      handleAddToFavourites({
                        id: newsId,
                        thumbnail,
                        title,
                        description,
                        hasCloseButton: true
                      })
                    }}>Adauga la favorite</Button>
                  </div>
                  <div dangerouslySetInnerHTML={{__html: content}}></div>
                </Col>
              </Row>
          </Container>          
      </Layout>
    )
}