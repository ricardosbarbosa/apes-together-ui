import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import { ArrowUpRight, Plus, Trash } from "phosphor-react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Playground: ComponentStory<typeof Button> = (args) => <Button {...args} />;
Playground.args = {
  children: 'Button',
}

export const Primary = Playground.bind({});
Primary.args = {
  children: 'Primary',
};
export const Secondary = Playground.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary'
};
export const RightIcon = Playground.bind({});
RightIcon.args = {
  icon: <ArrowUpRight size={22} />,
  iconPlacement: 'right',
  variant: 'secondary',
  children: 'secondary'
};
export const LeftIcon = Playground.bind({});
LeftIcon.args = {
  icon: <Plus size={22} />,
  iconPlacement: 'left',
  variant: 'secondary',
  children: 'secondary'
};
export const Icon = Playground.bind({});
Icon.args = {
  icon: <Trash size={22}/>,
  variant: 'secondary'
};
export const Block = Playground.bind({});
Block.args = {
  children: 'Secondary',
  variant: 'secondary',
  block: true
};

// const emulateSecondaryHover = 'border-palladium'
// const emulatePrimaryHover = 'bg-purple-pleasure-dark shadow-none'

// const emulatePrimaryFocus = 'shadow-3xl'
// const emulateSecondaryFocus = 'hover:none shadow-3xl border-purple-pleasure '



// export const AllButtons: ComponentStory<typeof Button> = () => (
//   <div className='m-2 grid grid-cols-5 gap-5 justify-items-center'>
//     {/* normal */}
//     <Button children="Primary" className='ml-1' />
//     <Button children="Secondary" variant='secondary'/> 
//     <Button children="Secondary" variant='secondary' icon={<Plus size={22}/>} iconPlacement="left" />
//     <Button children="Secondary" variant='secondary' icon={<ArrowUpRight size={22}/>} iconPlacement="right"/> 
//     <Button variant="secondary" icon={<Trash size={22} />} />
    
//     {/* hover */}
//     <Button children="Primary" className={emulatePrimaryHover} />
//     <Button children="Secondary" variant='secondary' className={emulateSecondaryHover}/> 
//     <Button children="Secondary" variant='secondary' icon={<Plus size={22}/>} iconPlacement="left" className={emulateSecondaryHover} />
//     <Button children="Secondary" variant='secondary' icon={<ArrowUpRight size={22}/>} iconPlacement="right" className={emulateSecondaryHover} /> 
//     <Button variant="secondary" icon={<Trash size={22} />} className={emulateSecondaryHover} />

//     {/* active */}
//     <Button children="Primary"  className={emulatePrimaryFocus} />
//     <Button children="Secondary" variant='secondary'  className={emulateSecondaryFocus} /> 
//     <Button children="Secondary" variant='secondary' icon={<Plus size={22}/>} iconPlacement="left"  className={emulateSecondaryFocus} />
//     <Button children="Secondary" variant='secondary' icon={<ArrowUpRight size={22}/>} iconPlacement="right" className={emulateSecondaryFocus} /> 
//     <Button variant="secondary" icon={<Trash size={22} />}  className={emulateSecondaryFocus} />

//     <Button children="Primary" disabled/>
//     <Button children="Secondary" variant='secondary' disabled/> 
//     <Button children="Secondary" variant='secondary' icon={<Plus size={22}/>} iconPlacement="left"disabled />
//     <Button children="Secondary" variant='secondary' icon={<ArrowUpRight size={22}/>} iconPlacement="right"disabled/> 
//     <Button variant="secondary" icon={<Trash size={22} />} disabled/>
//   </div>
// )