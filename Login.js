import React from "react";

import Nav from "./Nav";

function Login() {
    return (
        <div>
            <Nav></Nav>
            <div style={{ background: 'gray', height: '300px', width: '300px', color: 'white' }}>
                <h2>로그인</h2>
                이메일<input /><br></br>
                비밀번호<input /><br></br>
                <button>로그인</button>
            </div>
        </div>

    )
}

export default Login