// Primul pas este sa imi tin intr-o constanta Api key-ul
const APY_KEY = "f2c6b573-8f70-4b47-b271-ff339f5a8347";

// definesc functia care returneaza endpoint-ul folosit pt o anumita categorie de stiri
export function getNewsCategoriesEndpoint(category, pageNumber = 1, pageSize = 20) {
    // Imi construiesc quety string-ul pe care il trimit catre API 
    const queryParams = `?api-key=${APY_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`
    // Returnez link-ul complet catre api-ul care imi returneaza stirile pe categorie
    return `https://content.guardianapis.com/search${queryParams}`;
}

export function getNewsDetailsEndpoint (newsId) {   
    const queryParams = `?api-key=${APY_KEY}&show-fields=all`;
    return `https://content.guardianapis.com/${newsId}${queryParams}`;
}