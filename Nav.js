import React from "react";

import { useNavigate } from 'react-router-dom';

function Nav() {

    const navigate = useNavigate()

    return (
        <div style={{ background: 'green', height: '100px', color: 'white' }}>
            고속도로 로망스
            <button onClick={() => {
                navigate('/')
            }}>HOME</button>
        </div>
    )
}

export default Nav