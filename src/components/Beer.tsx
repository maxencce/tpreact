import React from 'react'
import './Beer.css'
import { MdDeleteOutline } from "react-icons/md";

type Props = {
    name: string,
    onDelete: () => void
}

// 

const Beer: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div id='beer-div'>
        <p>{props.name}</p>
        <button id='beer-delete-button' onClick={props.onDelete}><MdDeleteOutline color='#FF4742'/></button>
    </div>
  )
}

export default Beer