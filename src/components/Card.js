import React from 'react'
import ItemCard from './itemCard'

export default function Card({dados}) {
    return (
        <div className="card space flex-row" style={{
            width: "180px"
          }} >
         <p className="item">{dados.parcela}</p>
         <ItemCard itens={dados} />
      </div>
    )
}
