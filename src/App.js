import Header from "./components/Header";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";
// Import componentele ce tin de routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import NewsCategory from "./pages/NewsCategory";
import { useEffect, useReducer } from "react";
import {getNewsCategoriesEndpoint} from "./api/endpoints";
import NewsDetails from "./pages/NewsDetails";
import { favouritesReducer, initalState } from "./store/Favorites/reducer";
import { FavouriteContext } from "./store/Favorites/context";

// Ne definim rutele necesare aplicatiei
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement: <Page404/>
  },
  {
    path:'/favourites',
    element: <Favourite/>
  },
  {
    path:'/category/:categoryId',
    element: <NewsCategory />
  },
  {
    path:'/news/:newsId',
    element: <NewsDetails />
  }
])

function App() {
      // Initializez reducerul pt stirile favorite 
      const [favouritesState, favouriteDispatch] = useReducer(favouritesReducer, initalState);
      // Creez un obiect ce va fii pasat ca valoare contextului
      const favouritesContextValue = {
        favouritesState,
        favouriteDispatch
      }

  return (
    <div className="App">
      <FavouriteContext.Provider value={favouritesContextValue}>
        <RouterProvider router={router}/>
      </FavouriteContext.Provider>
    </div>
  );
}

export default App;
