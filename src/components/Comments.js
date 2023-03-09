import React from 'react'

export const Comments = (props) => {

    const { item } = props;


    if(item.highlight){
        return (
        <>
        <span style={{background: "#00ff00"}}> ▷ {item.comment}</span>
        </>
        )
    }
    return <span style={{color: "#000"}}>{item.comment}</span>
}

export default Comments