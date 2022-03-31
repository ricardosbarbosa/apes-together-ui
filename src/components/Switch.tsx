import React from "react";
import { styled } from '@mui/system';
import SwitchUnstyled, {
  switchUnstyledClasses,
  SwitchUnstyledProps,
} from '@mui/base/SwitchUnstyled';
import { CSSProperties } from 'react';

const green = {
  normal: '#78CB8F',
  hover: '#57B170',
};

const grey = {
  normal: '#DFDFDF',
  hover: '#B6B6B6',
};

const Root = styled('span')(
  () => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 32px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
    &:hover {
      & .${switchUnstyledClasses.track} {
        background-color: ${grey['normal']};
      }
    }
  }

  & .${switchUnstyledClasses.track} {
    background: ${grey['normal']};
    border-radius: 30px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    transition: 0.3s;
  }

  &:hover {
    & .${switchUnstyledClasses.track} {
      background-color: ${grey['hover']};
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
    transition: 0.3s;
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 32px;
      top: 4px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${green['normal']};
    }

    &:hover {
      .${switchUnstyledClasses.track} {
        background-color: ${green['hover']};
      }
    }

    &.${switchUnstyledClasses.focusVisible} {
      box-shadow: 0px 0px 0px 4px rgba(120, 203, 143, 0.24);
      border-radius: 16px;
    }

    &.${switchUnstyledClasses.disabled} {
      opacity: 0.4;
      cursor: not-allowed;
      &:hover {
        & .${switchUnstyledClasses.track} {
          background-color: ${green['normal']};
        }
      }
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
  `
);

export type SwitchProps = SwitchUnstyledProps & { style?: CSSProperties | undefined };
export default function Switch(props: SwitchProps) {
  return <SwitchUnstyled component={Root} {...props} />;
}
