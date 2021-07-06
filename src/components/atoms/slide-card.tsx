import React from 'react';
import { styled } from '@material-ui/core';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import _ from 'lodash';

const StyledCard = styled(Card)({
  border: '1px solid black',
  minWidth: 'fit-content',
  textAlign: 'center',
  flexGrow: 1
})

const StyledCardContent = styled(CardContent)({ minHeight: '3rem' });

interface ISlideCard {
  children: any
  identifier?: string | number
  handleClick?: any
};

export const SlideCard: React.FC<ISlideCard> = ({ children, handleClick = _.noop, identifier = 0 }: ISlideCard) => (
  <StyledCard>
    <CardActionArea disableRipple disableTouchRipple onClick={() => handleClick(identifier)}>
      <StyledCardContent>
          {children}
      </StyledCardContent>
    </CardActionArea>
  </StyledCard>
);