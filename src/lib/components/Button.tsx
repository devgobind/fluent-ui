import React from 'react'
interface props  {
  id: string, 
  name: string, 
  value: string,
  disabled: boolean,
  label: string,
}
const Button = (props: props) => {
  return (
    <button className={`btn CTA`}
        data-id={props.id}
        type="submit"
        name={props.name}
        value={props.value}
        disabled={props.disabled}> 
           <h4>{props.label}</h4>
      </button>
  )
}

export default Button;