import React, { useState, useEffect } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import { Route } from "react-router-dom";
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} />
      </Route>
    </div>
  );
};

export default App;
