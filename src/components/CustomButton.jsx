import React from 'react';
import { Button } from '@/components/ui/button';

const CustomButton = ({ children }) => {
  return (
    <Button className='text-white bgBlue cursor-pointer'>{children}</Button>
  );
};

export default CustomButton;
