import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowUpRight, CircleNotch, Plus, Trash } from 'phosphor-react';
import { Button } from '../../index';

export default {
  title: 'Components/Button',
  component:  Button,
  decorators: [
    (Story) => (
        <Story />
    )
  ]
} as ComponentMeta<typeof Button>;

export const ButtonPrimary: ComponentStory<typeof Button> = () => (
  <div className='flex flex-col w-full'>
    <Button variant='primary'>
      Primary
    </Button>
    <br />
    <Button variant='primary' disabled={true}>
      Primary
    </Button>
  </div>
);

export const ButtonSecondary: ComponentStory<typeof Button> = () => (
  <div className='flex flex-col w-full'>
    <Button variant='secondary'>
      Secondary
    </Button>
    <br />
    <Button variant='secondary' disabled={true}>
      Secondary
    </Button>
  </div>
);

export const ButtonSecondaryLeading: ComponentStory<typeof Button> = () => (
  <div className='flex flex-col w-full'>
    <Button variant='secondary' leading={true} icon={<Plus size={20} />}>
      Secondary
    </Button>
    <br />
    <Button variant='secondary' leading={true} icon={<Plus size={20} />} disabled={true}>
      Secondary
    </Button>
  </div>
);

export const ButtonSecondaryTrailing: ComponentStory<typeof Button> = () => (
  <div className='flex flex-col w-full'>
    <Button variant='secondary' icon={<ArrowUpRight size={20} />}>
      Secondary
    </Button>
    <br />
    <Button variant='secondary' icon={<ArrowUpRight size={20} />} disabled={true}>
      Secondary
    </Button>
  </div>
);

export const ButtonWarning: ComponentStory<typeof Button> = () => (
  <div className='flex flex-col w-full'>
    <Button variant='warning'>
      Secondary
    </Button>
  </div>
);

export const ButtonIcon: ComponentStory<typeof Button> = () => (
  <div className='flex flex-col w-full'>
    <Button variant='icon' icon={<Trash size={20} />} />
    <br />
    <Button variant='icon' icon={<Trash size={20} />} disabled={true} />
  </div>
);

export const ButtonLoading: ComponentStory<typeof Button> = () => (
  <div className='flex flex-col w-full'>
    <Button 
      variant='primary' 
      icon={
        <CircleNotch size={20}>
          <animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            dur='1s'
            from='0 0 0'
            to='360 0 0'
            repeatCount='indefinite'
          />
        </CircleNotch>
      } 
      disabled={true}
      leading={true}
    >
      Verifying
    </Button>
    <br />
    <Button 
      variant='secondary' 
      icon={
        <CircleNotch size={20}>
          <animateTransform
            attributeName='transform'
            attributeType='XML'
            type='rotate'
            dur='1s'
            from='0 0 0'
            to='360 0 0'
            repeatCount='indefinite'
          />
        </CircleNotch>
      } 
      disabled={true}
      leading={true}
    >
      Loading
    </Button>
  </div>
);
