import React from "react";

import Nav from "./Nav";

import { useParams } from 'react-router-dom'

function Login({ high }) {

    let {id} = useParams()

    const [댓글, 댓글변경] = React.useState([])
    const reply_ref = React.useRef()

    const [좋아요, 좋아요변경] = React.useState(0)
    const [하트, 하트변경] = React.useState(['🤍'])
    const [댓글수, 댓글수변경] = React.useState(0)

    function addReply() {
        const reply_data = {
            reply: reply_ref.current.value
        }

        댓글변경([...댓글, reply_data])

        reply_ref.current.value = ''
    }

    return(
        <div>
            <Nav></Nav>
            <div>
                <p>{high[id].name}</p>
                <img src={high[id].image} style={{width: '300px', heigt: '300px'}}/>
                <p>{high[id].content}</p>
                <hr></hr>
            </div>

            <div>
                <span>댓글</span>
                <input ref={reply_ref}/>
                <button onClick={() => {
                    addReply()
                    댓글수변경(댓글수+1)
                }}>댓글추가</button>


                <p><span onClick={() => {
                    좋아요변경(좋아요+1)
                    const copy = [...하트]
                    copy[0] = '❤️'
                    하트변경(copy)
                }}>{하트}</span>{좋아요}댓글{댓글수}</p>

            </div>
            <div>
                {
                    댓글.map((a, i) => {
                       return(
                        <p>{a.reply}</p>
                       )
                    })
                }
            </div>
        </div>
        
    )
}

export default Login