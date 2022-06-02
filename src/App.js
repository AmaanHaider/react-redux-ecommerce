import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Containers/Header'
import ProductDetail from './Components/Containers/ProductDetail'
import ProductListing from './Components/Containers/ProductListing'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductListing/>} />
        <Route path='/product/:productId' element={<ProductDetail/>} />
        <Route >404 Not Found</Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
