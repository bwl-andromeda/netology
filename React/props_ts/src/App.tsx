import './App.css'
import ListingProduct from './components/TaskTwo/listingProduct';
import ViewFilms from './components/TaskOne/ViewFilms';


function App() {
  return (
    <>
      <h1>Задача 1!
        <ViewFilms />
      </h1>
      <h1>Задача 2!
        <ListingProduct />
      </h1>
    </>
  )
}

export default App
