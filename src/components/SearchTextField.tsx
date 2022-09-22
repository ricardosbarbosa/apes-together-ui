import React from "react";
import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { MagnifyingGlass, XCircle } from 'phosphor-react';
import { useRef, useState } from "react"
import { useTheme } from '@mui/material/styles';

export type SearchTextFieldProps = TextFieldProps;

function SearchTextField({ value, defaultValue, onChange, onBlur, onFocus, ...props }: SearchTextFieldProps) {
  const ref = useRef<HTMLInputElement>();
  const theme = useTheme()
  const [focused, setFocused] = useState(false)
  const startAdornment = (
    <InputAdornment position='start'>
      <MagnifyingGlass size={20} />
    </InputAdornment>
  );
  const handleOnClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onChange?.({ target: { value: '' } });
    ref.current?.focus();
  };
  const endAdornment = !!value && (
    <InputAdornment position='end'
      sx={{
        '& svg': {
          color: `${theme.palette.apes.palladium} !important`,
          cursor: 'pointer'
        },
        '& svg:hover': {
          color: `${theme.palette.apes.purplePleasure.main} !important`,
        }
      }}
    >
      <XCircle size={20} weight='fill' onClick={handleOnClick} />
    </InputAdornment>
  );
  const InputProps = {
    startAdornment,
    endAdornment,
  };

  return (
    <TextField
      {...props}
      inputRef={ref}
      type='search'
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      InputProps={InputProps}
      onFocus={(e) => {
        setFocused(true)
        onFocus?.(e)
      }}
      onBlur={(e) => {
        setFocused(false)
        onBlur?.(e)
      }}
      sx={{
        '& .MuiInputAdornment-root': {
          color: focused ? theme.palette.apes.purplePleasure.main : theme.palette.apes.palladium,

        },
        '.MuiOutlinedInput-input': {
          '&::placeholder': {
            textOverflow: 'ellipsis',
            color: theme.palette.apes.argent,
            opacity: 1
          },
        },
        '& .MuiInputAdornment': {
          background: 'transparent',
          marginRight: 0,
        },

        '& .MuiOutlinedInput-root': {
          '&:hover': {
            '& .MuiInputAdornment-root': {
              color: theme.palette.apes.purplePleasure.main
            },
            '& .MuiInputAdornment-positionEnd': {
              color: theme.palette.apes.palladium
            }
          },
        }

      }}
    />
  );
}

export default SearchTextField;
