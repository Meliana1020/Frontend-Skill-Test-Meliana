import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './Pages/home.jsx';
import ProductPage from './Pages/product.jsx';
import AboutPage from './Pages/about.jsx';
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element : <HomePage />
  },
  {
    path : '/product',
    element : <ProductPage />
  },
  {
    path : '/about',
    element : <AboutPage />
  }
])

const MainApp = () => {
  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)
