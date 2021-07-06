import { styled } from '@material-ui/core';
import React from 'react';

const StyledHeader = styled('div')({
  position: 'fixed',
  top: 5,
  right: 5
});
const StyledContent = styled('div')({ width: '99vw' });

const DemoPresentationTemplate = ({ children, header }: { children: any; header: any }) => (
  <>
    <StyledHeader>{header}</StyledHeader>
    <StyledContent>{children}</StyledContent>
  </>
);

export default DemoPresentationTemplate;