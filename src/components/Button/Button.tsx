import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface IVariants {
  primary: string
  secondary: string
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'large' | 'default' | 'small'
  block?: boolean
  iconPlacement?: 'right' | 'left'
  icon?: ReactNode
  disabled?: boolean | undefined;
  //future props
  // size?: 'large' | 'middle' | 'small' //default small
  // loading?: boolean //default fase
  // danger?: boolean //default false
  // href?: string
// <form action="https://google.com">
//     <input type="submit" value="Go to Google" />
// </form>
}


const variants: IVariants = {
  primary: 'bg-purple-pleasure hover:bg-purple-pleasure-dark text-white focus:shadow-3xl focus-visible:shadow-3xl hover:shadow-none active:shadow-none focus-visible:shadow-none',
  secondary: `bg-white border-2 border-kingly-cloud text-off-black hover:border-palladium focus:shadow-3xl focus:border-purple-pleasure active:border-purple-pleasure focus:text-purple-pleasure active:shadow-none backgroundColor: ({ after }) => after(['disabled'])`,
}

export default function Button(props: IButton) {
  const {
    variant = 'primary',
    disabled = false,
    block = false,
    icon,
    iconPlacement = "left",
    children,
    className,
    size = 'default',
    ...htmlButtomProps
  } = props

  const _base = `flex font-sans not-italic items-center justify-center rounded-lg`;

  const _disabled = `${disabled ? `cursor-not-allowed opacity-40` : ''}`
  const _block = `${block ? 'w-full' : ''}`
  const _variant = `${variants[variant]}`
  const _icon = `${icon && !children? 'p-3 aspect-square' : ''}`
  const _childrenWithIcon = `${icon && children ? 'gap-2' : 'gap-0'}`
  const _iconPlacement = `${icon && iconPlacement === "left" ? 'flex-row' : 'flex-row-reverse'}`
  const _size = `${size === 'default' ? 'py-3 px-24' : size ==='large' ? 'py-4 px-28' : 'py-1 px-20 '}`

  const _className = `${_icon} ${_size} ${_iconPlacement} ${_childrenWithIcon} ${_base} ${_disabled} ${_block} ${_variant} `
 
  return (
    <button
      disabled={disabled}
      className={`${_className} ${className}`}
      {...htmlButtomProps}
    >
      {icon}
      {children}
    </button>
  )
}

export const Example = () => {
  return <Button variant='primary'>ok</Button>
}