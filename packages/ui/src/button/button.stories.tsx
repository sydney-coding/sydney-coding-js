import type { Meta, StoryFn } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'base/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

const Template: StoryFn<typeof meta> = (props) => <Button {...props}>Default</Button>;

export const Default = Template.bind({});
