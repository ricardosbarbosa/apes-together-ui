import React, { ReactNode } from 'react'

interface IButton {
    variant: string,
    icon?: ReactNode,
    children?: ReactNode,
    leading?: boolean,
    disabled?: boolean
}

function Button({variant = 'primary', icon, children, leading, disabled = false}: IButton) {

    let _base = 'flex items-center justify-center disabled:cursor-not-allowed outline-none focus:outline-none h-[52px] rounded-xl font-bold px-8 max-w-[256px]';
    const _primary = 'bg-purple-pleasures text-white hover:bg-purple-hover disabled:bg-purple-pleasures disabled:opacity-40 focus:bg-purple-pleasures'
    const _secondary = 'bg-white text-black-off border-2 border-kingly-cloud hover:border-palladium disabled:opacity-60 disabled:border-kingly-cloud'
    const _error = 'bg-creamy-coral text-white hover:bg-[#CB6678] focus:bg-creamy-coral  focus:ring-2 focus:ring-offset-2 focus:ring-[#e67689] focus:ring-offset-creamy-coral'
    const _icon = 'flex items-center justify-center disabled:cursor-not-allowed outline-none focus:outline-none h-[52px] w-[52px] rounded-xl font-bold bg-white text-black-off border-2 border-kingly-cloud hover:border-palladium disabled:opacity-60 disabled:border-kingly-cloud'

    if(variant === 'primary') {
        _base += ' ' + _primary
    }else if(variant === 'secondary') {
        _base += ' ' + _secondary
    }else if (variant === 'warning') {
        _base += ' ' + _error
    }
    
    return (
        <button className={variant === 'icon' ? _icon : _base} disabled={disabled}>
            {leading && (
                <span className={variant === 'icon' ? '' : 'mr-2'}>
                    {icon}
                </span>
            )}
            <span>
                {children}
            </span>
            {!leading && (
                <span className={variant === 'icon' ? '' : 'ml-2'}>
                    {icon}
                </span>
            )}
        </button>
    )
}

export default Button