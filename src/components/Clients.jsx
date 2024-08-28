import React from 'react'
import {styles} from "../Util/styles"
import { client } from '../Util/constants'
import CLientCard from './CLientCard'
const Clients = () => {
  return (
    <div id='clients' className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {client.map((cl) => (
            <CLientCard key={cl.id} {...cl}></CLientCard>
        ))}
        </div>
    </div>
  )
}

export default Clients