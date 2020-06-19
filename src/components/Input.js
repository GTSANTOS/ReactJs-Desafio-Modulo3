import React from 'react'

export default function Input({min, max, value, descricao, onChange}) {

      const handle = (event) => {
        onChange(event.target.value);
      };

    return (
        <div className="input-field col s4">
        <span style={{
          display: "block",
          margin: "0rem 0"
        }}>
          <label >{descricao}</label>
        </span>
        <input type="number" value={value} onChange={handle} min={min} max={max} />
      </div>
    )
}
