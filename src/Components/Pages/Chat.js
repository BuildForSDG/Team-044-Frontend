import React, { useState } from 'react'
import '../../styles/Chat.css'

const Chat = () => {
    const [typed, setTyped] = useState('')
const data = {
    time: '',
    typed
}
    const onTypedChange = (e) => {
        const value = e.target.value
        setTyped(value)
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        
        console.log(data)
    }
    return (
        <div className='chat'>
            <div className='messages'>
                Chat
                {data.typed}
            </div>
            <form onSubmit={onFormSubmit}>
                <div className='form-group'>
                    <input type='text' value={typed} onChange={onTypedChange}/>
                </div>
                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default Chat;