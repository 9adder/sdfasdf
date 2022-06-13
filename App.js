import logo from './logo.svg';
import './App.css';
import React from 'react';

import Main from './Main';
import Login from './Login';
import Signup from './Signup';
import Detail from './Detail'
import Nav from './Nav';

import { Route, Routes } from 'react-router-dom';

function App() {

  const [가게이름, 가게이름변경] = React.useState([
    {   id: 0,
            name: "가게이름",
            location: "위치0",
            image: "https://img.etnews.com/photonews/2001/1265591_20200124120840_202_0001.jpg",
            content: "음식정보0"
        },
        {   id: 1,
            name: "핫도그가게",
            location: "의정부",
            image: "http://cdn.iconsumer.or.kr/news/photo/202110/21844_24989_154.jpg",
            content: "음식정보1"
        },
        {   id: 2,
            name: "김밥가게",
            location: "김포",
            image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
            content: "음식정보2"
        },
        {   id: 3,
            name: "우동가게",
            location: "마포",
            image: "https://t1.daumcdn.net/cfile/tistory/998B04385CF3336410",
            content: "음식정보3"
        }
  ])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main 가게이름={가게이름}/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Detail/:id' element={<Detail 가게이름={가게이름}/>}/>
      </Routes>
    </div>
  );
}

export default App;
