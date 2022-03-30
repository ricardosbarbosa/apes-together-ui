import { InputAdornment, TextField, TextFieldProps } from "@mui/material"
import { MagnifyingGlass, XCircle } from "phosphor-react"
import { useRef } from "react"

export type SearchTextFieldProps = TextFieldProps

function SearchTextField({ value, defaultValue, onChange, ...props }: SearchTextFieldProps) {
  const ref = useRef<HTMLInputElement>()

  const startAdornment = (
    <InputAdornment position="start">
      <MagnifyingGlass size={20} />
    </InputAdornment>
  )

  const handleOnClick = () => {
    // @ts-ignore
    onChange?.({ target: { value: '' } })
    ref.current?.focus()
  }

  const endAdornment = !!value && (
    <InputAdornment position="end" >
      <XCircle
        size={20}
        weight="fill"
        onClick={handleOnClick}
      />
    </InputAdornment>
  )

  const InputProps = {
    startAdornment,
    endAdornment
  }

  return (
    <TextField
      {...props}
      inputRef={ref}
      type='search'
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      InputProps={InputProps}
    />
  )
}

export default SearchTextField