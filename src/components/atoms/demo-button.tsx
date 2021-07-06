import React, { MouseEventHandler, ReactElement } from 'react';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import _ from 'lodash';

interface IDemoButtonProps {
  children: any
  size?: 'small' | 'medium' | 'large'
  handleClick?: MouseEventHandler<any>
  type?: 'button' | 'submit' | 'reset'
  isDisabled?: boolean
};

const StyledButton = styled(Button)({ border: '1px solid grey' })

export const DemoButton: React.FC<IDemoButtonProps> = ({
  size = 'medium', handleClick = _.noop, type = 'button', isDisabled = false, children
}:IDemoButtonProps):ReactElement => (
  <StyledButton
    size={size}
    onClick={handleClick}
    disableFocusRipple
    type={type}
    disabled={isDisabled}
  >
    {children}
  </StyledButton>
);
