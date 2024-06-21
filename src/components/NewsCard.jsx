import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { removeFromFavourites } from "../store/Favorites/actions";
import { FavouriteContext } from "../store/Favorites/context";
import "./NewsCard.css";
// Aici ne vom folosi de comp de ReactBootstrap
export default function NewsCard(props) {
    const {favouriteDispatch} = useContext(FavouriteContext);
    // Extrag props componentei
    const {newsId, imgSrc, title, description, hasCloseButton} = props;
    
    function handleRemoveFromFavourite(id){
        const actionResult = removeFromFavourites(id);
        favouriteDispatch(actionResult);
    }
    return (
        // La click pe card, vom deschide pagina cu detalii pentru stire
        <Card className="newsCard d-flex flex-column align-items-center justify-content-between h-100">
            {/* Caracterul / din id il deruteaza pe react router, asa ca o sa codificam id-ul */}
            <Link to={`/news/${encodeURIComponent(newsId)}`}>
            <Card.Img src={imgSrc} variant="top"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            </Link>
            {/* Daca avem button de eliminare de la favorite, il afisam, adica daca avem propietatea hasCloseButton */}
            {hasCloseButton && (
                <Button variant="light" onClick={()=>{
                    handleRemoveFromFavourite(newsId)
                }}><span className="material-icons text-dark">close</span></Button>
            )}
        </Card>
    )
}