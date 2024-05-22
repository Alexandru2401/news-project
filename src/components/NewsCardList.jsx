import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsCard from "./NewsCard";

export default function NewsCardList(props){
    // Extrag props-urile necesare
    const {newsList} = props;
    // Folosesc grid-ul de booststrap pt a aseza elem in pag
    return (
        <Container>
            <Row>
                {/* Iteram prin lista de stiri si pt fiecare stire afisez un card */}
                {newsList.map((news) =>{
                    return (
                        // Adaugam si prop de key 
                        <Col xs={12} md={6} lg={4} className="mb-4" key={news.id}>
                            <NewsCard
                                newsId={news.id}
                                imgSrc={news.thumbnail}
                                title={news.title}
                                description={news.description}
                                hasCloseButton={news.hasCloseButton}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}