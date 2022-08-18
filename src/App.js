import './App.css';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { preloadData } from './redux/companies/companiesSlice.js';

function App() {

  const test = useSelector( state => state.companies.allCompanies );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(preloadData())
  }, [dispatch])

  console.log(test);

  return (
    <div className="App">
      <h1>TESTING</h1>
    </div>
  );
}

export default App;
