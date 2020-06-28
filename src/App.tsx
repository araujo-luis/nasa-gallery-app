import React, { useEffect } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { loadFavoritePhotos, isLiked  } from "./reducers/favoritePhotos";
import { selectDate } from './reducers/date';
function App() {
  const date = useSelector(selectDate);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadFavoritePhotos());
    dispatch(isLiked(date));
  }, [date, dispatch]);
  
  return (

    <div className="App">
      <NavBar />
      <Gallery />
    </div>
  );
}

export default App;
