import context from "react-bootstrap/esm/AccordionContext";

export function getNewsList (apiResponse) {
    // Daca raspunsul de la api nu contine date, returnam un array gol (o forma de fallback)
    if(!apiResponse || !apiResponse.response) {
        return [];
    }
    // Extrag datele de results de la Api 
    const rawNewsList = apiResponse.response.results;
    // Iterez prin array-ul rawNewsList (este un array care contine obiecte cu fiecare stire) si transform fiecare element in formatul de care am nevoie 
    const adaptedNewsList = rawNewsList.map((news)=>{
        return {
            id: news.id,
            thumbnail: news.fields.thumbnail,
            title: news.fields.headline,
            description: news.fields.trailText
        }
    })
    // Returnez datele adaptate
    return adaptedNewsList;
}

export function getNewsDetails(apiResponse){
    // Daca rasp de la api nu contine date, returnez un array gol
    if(!apiResponse || !apiResponse.response) {
        return [];
    }
    const rawNewsDetails = apiResponse.response.content;
    // Extrag din raspuns, doar campurile de interes si le pot salva in cheile corespunzatoare
    const adaptedNewsDetails = {
        date: rawNewsDetails.webPublicationDate,
        title: rawNewsDetails.fields.headline,
        description: rawNewsDetails.fields.trailText,
        image: rawNewsDetails.fields.main,
        content: rawNewsDetails.fields.body,
        author: rawNewsDetails.fields.byLine,
        thumbnail: rawNewsDetails.fields.thumbnail,
    }
    return adaptedNewsDetails;
}