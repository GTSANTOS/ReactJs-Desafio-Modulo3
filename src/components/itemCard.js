import React from 'react'

import { formatNumber } from '../helpers/format';

export default function itemCard({itens}) {

    const positivo = itens.juros >= 0 ? true : false;   
    return (
        <div >
            <ul>
                <li className={positivo ? 'text-green' : 'text-red'}>R$ {formatNumber(itens.valorFinal ?? 0)}</li>
                <li className={positivo ? 'text-green' : 'text-red'}>{ positivo ?  '+' : '-' }R$ {formatNumber(Math.abs(itens.valorJuros) ?? 0)}</li>
                <li className={positivo ? 'text-blue' : 'text-orange'}>{formatNumber(itens.porcentagem ?? 0)}%</li>
            </ul>
        </div>
    )
}
