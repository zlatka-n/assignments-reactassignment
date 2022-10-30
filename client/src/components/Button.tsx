import React from 'react'

type ButtonProps = {
    onClick?: () =>void
    type?: 'submit' | 'reset' | 'button'
    icon: React.ReactNode
}

const Button = ({onClick, type, icon}: ButtonProps) => {
  return (
    <button onClick={onClick} type={type}>
        {icon}
    </button>
  )
}

export default Button