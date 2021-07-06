import { styled } from '@material-ui/core';
import React from 'react';

const StyledPage = styled('div')({ width: '99vw' });
const StyledContent = styled('div')({
  alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '99vh'
})

const DemoListTemplate = ({ children }: { children: any; }) => (
  <StyledPage>
    <StyledContent>{children}</StyledContent>
  </StyledPage>
);

export default DemoListTemplate;