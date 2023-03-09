import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from "./page/Post";
import Write from "./page/Write";
import Detail from "./page/Detail";
import styled from 'styled-components';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
