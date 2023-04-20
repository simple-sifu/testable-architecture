import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from './productSearch/ProductSlice';


function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const {isLoading, data, error} = useSelector(state => state.products)
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setSearchValue(e.target.value)
    dispatch(getProducts(searchValue));
  }
  console.log("error =", error)
  return (
    <div className="App">
      <input value={searchValue} onChange={(e) => changeHandler(e)} />
      { error && <h3>{error}</h3>}
      { isLoading && <h3>Loading...</h3>}
      { !error && !isLoading && data.map((product, index) =><div key={product.name+index}>{product.name}</div>)}
    </div>
  );
}
export default App;
