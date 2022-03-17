import * as React from 'react';
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses, SwitchUnstyledProps } from '@mui/base/SwitchUnstyled';

const blue = {
  500: '#78CB8F',
};

const grey = {
  400: '#DFDFDF',
  500: '#AAB4BE',
  600: '#6F7E8C',
};

const Root = styled('span')(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 32px;
  margin: 10px;
  cursor: pointer;

  &::hover {
    & .${switchUnstyledClasses.track}{
      background: #B6B6B6
    }
  }

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
    border-radius: 30px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  &:hover {
    & .${switchUnstyledClasses.track} {
      background-color: #B6B6B6;
    }
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 24px;
    height: 24px;
    top: 4px;
    left: 4px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.track} {
    background-color: ${grey[500]};
    box-shadow: 0px 0px 0px 4px rgba(223, 223, 223, 0.32);
    border-radius: 20px;
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 32px;
      top: 4px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }

    &:hover {
      .${switchUnstyledClasses.track} {
        background-color: #57B170;
      }
    }

    &.${switchUnstyledClasses.focusVisible} {
      box-shadow: 0px 0px 0px 4px rgba(120, 203, 143, 0.24);
      border-radius: 16px;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `,
);

export default function Switch(props: SwitchUnstyledProps) {
  return (
    <SwitchUnstyled component={Root} {...props}  />
  );
}