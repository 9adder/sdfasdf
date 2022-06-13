import React from "react";

import Nav from "./Nav";

function Signup() {
    return (
        <div>
            <Nav></Nav>
            <div style={{ background: 'gray', height: '300px', width: '300px', color: 'white' }}>
                <h2>로그인</h2>
                이메일<input /><br></br>
                비밀번호<input /><br></br>
                비밀번호 확인<input /><br></br>
                <button>로그인</button>
            </div>
        </div>

    )
}

export default Signup