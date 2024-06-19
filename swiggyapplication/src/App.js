import logo from './logo.svg';
import './App.css';
import Body from './component/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Search from './component/Search';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import Collections from './component/Collections';
import RestaurantDetail from './component/RestaurantDetail';
import Cart from './component/Cart';
import OfferceNearMe from './component/OfferceNearMe';
import Meal from './component/Meal';
import Recipe from './component/Recipe';
function App() {
  const  router = createBrowserRouter([
    {
      path:'/',
      element:<Body />
    },
    {
      path:'/search',
      element:<Search />
    },
    {
      path:'/collections/:collectionId',
      element:<Collections />
    },
    {
      path:'/restaurants/:restaurantId',
      element:<RestaurantDetail />
    },
    {
      path:'/cart',
      element: <Cart />
    },
    {
      path:'/offers-near-me',
      element:<OfferceNearMe />
    },
    {
      path:'/meal',
      element:<Meal />
    },
    {
      path:'/recipe/:id',
      element:<Recipe />
    }
  ])
  return (
    <div className="App">
      <Provider store={appStore}>
        <RouterProvider router={router} />
        </Provider>
    </div>
  );
}

export default App;
