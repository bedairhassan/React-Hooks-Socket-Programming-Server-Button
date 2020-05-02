import React, { useState, useEffect } from 'react'
import Button from './Button'

{/* <ServerButton name={`Server Button`} socket={socket}/> */ }
// props
export default function ServerButton({ socket, event,responding,name ,data}) {

    // const [serverStringserverString, setServerString] = useState(``)
    const [click, setClick] = useState(false)

    useEffect(() => {

        socket.on(event, response => {

            console.log(`socket.on( hello world ) : ${response}`)
            responding(response)
        })
        setClick(false)
    }, click)

    const clicked = ()=>{
        socket.emit(event, data)
        setClick(true)
    }

    return (

        <React.Fragment>
            <Button onClick={()=>clicked()} name={name} />
        </React.Fragment>
    )
}

