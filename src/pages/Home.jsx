import React from "react";
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";
import NewsCardList from "../components/NewsCardList";
import { Link } from "react-router-dom";
import {getNewsCategoriesEndpoint} from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsList } from "../api/adaptors";
export default function Home(){
        // Generez endpoints-urile pt categoriile de stiri
    const technologyNewsEndpoint = getNewsCategoriesEndpoint('technology', 1, 6);
    // Fetch-uim datele de la The Guardian Api
    const technologyData = useFetch(technologyNewsEndpoint);
    // Adaptez datele primite de la server
    const adaptedTechnologyData = getNewsList(technologyData);

    // endpoints fotbal
    const footballNewsEndpoint = getNewsCategoriesEndpoint('football', 1, 6);
    const footballData = useFetch(footballNewsEndpoint);
    const adaptedFootballData = getNewsList(footballData); 
    
    return (
        <Layout>
            <section className="tech my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Tech</h1>
                    {/* Afisez stirile despre tehnologie*/}
                    <NewsCardList 
                    newsList={adaptedTechnologyData}
                    />
                    <p>Vezi toate stirile legate de tehnologie in sectiunea:{" "}
                        <Link to="/category/technology" className="text-secondary">Tech</Link>
                    </p>
                </Container>
            </section>
            <section className="football my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Fotbal</h1>
                    {/* Afisez stirile despre tehnologie*/}
                    <NewsCardList 
                    newsList={adaptedFootballData}
                    />
                    <p>Vezi toate stirile legate de fotbal in sectiunea:{" "}
                        <Link to="/category/football" className="text-secondary">Fotbal</Link>
                    </p>
                </Container>
            </section>
            <section className="favorites my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Favorite</h1>
                    <p>Vrei sa salvezi stirile favorite pentru a le citi mai tarziu?</p>
                    <p>In cadrul fiecarei stiri gasesti un buton prin care poti adauga stirea la favorite</p>
                    <p className="pb-3">
                        Viziteaza sectiunea{" "}
                        <Link to='/favourites' className="text-secondary">
                            Favorite
                        </Link>
                        {' '}pentru a vedea stirile adaugate la favorite.
                    </p>
                </Container>
            </section>
        </Layout>
    )
}