import logo from './logo.svg';
import './App.css';
import Body from './component/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Search from './component/Search';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import Collections from './component/Collections';
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
