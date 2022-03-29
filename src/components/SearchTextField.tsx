import { InputAdornment, TextField, TextFieldProps } from "@mui/material"
import { MagnifyingGlass, XCircle } from "phosphor-react"
import { useRef } from "react"

export type SearchTextFieldProps = TextFieldProps

function SearchTextField({ value, defaultValue, onChange, ...props }: SearchTextFieldProps) {
  const ref = useRef<HTMLInputElement>()
  return (
    <TextField
      {...props}
      inputRef={ref}
      type='search'
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      InputProps={{
        startAdornment: <InputAdornment position="start"><MagnifyingGlass size={20} /></InputAdornment>,
        endAdornment: (!!value && (
          <InputAdornment position="end" >
            <XCircle size={20} weight="fill"

              onClick={() => {
                // @ts-ignore
                onChange?.({ target: { value: '' } })
                ref.current?.focus()
              }}
            />
          </InputAdornment>
        ))
      }}
    />
  )
}

export default SearchTextField