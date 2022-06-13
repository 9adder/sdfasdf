import React from "react";
import axios from "axios";

import { useNavigate } from 'react-router-dom';



function Main({ 가게이름 }) {

  
  const navigate = useNavigate()

  const getList = axios.get("http://localhost:5001/가게이름")
  .then((결과)=> {
    console.log(결과.data)
  })

  
  return (
    <div>
      <div style={{ background: 'green', height: '100px', color: 'white' }}>
        고속도로 로망스
        <button onClick={() => {
          navigate('/Login')
        }}>로그인</button>
        <button onClick={() => {
          navigate('/Signup')
        }}>회원가입</button>
      </div>

      

      <div>
      {
        가게이름.map((a, i) => {
          return (
            <div style={{ background: 'gray', height: '300px', width: '300px', color: 'white' }}>
              <p>{a.name}</p>
              <p>{a.location}</p>
              <button onClick={() => {
                navigate(`/Detail/${i}/`)
              }}><img src={a.image} style={{width: '100px', heigt: '100px'}}/></button>
              <tr></tr>
            </div>
          )
        })
      }
    </div>
    </div >

  )
}

export default Main