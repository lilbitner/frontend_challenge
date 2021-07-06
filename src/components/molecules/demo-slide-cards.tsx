import React, { ReactElement } from 'react';
import { styled } from '@material-ui/core';
import { SlideCard } from '../atoms/slide-card';
import _ from 'lodash';

const ContentContainer = styled('div')({
  backgroundColor: 'lightGrey',
  overflowY: 'scroll',
  minHeight: '95vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  padding: '1rem',
});

interface IDemoSlideCards {
  demoSlides: string[]
  handleSelection: (cardId: number) => void
};

export const DemoSlideCards: React.FC<IDemoSlideCards> = ({ demoSlides = [], handleSelection }: IDemoSlideCards) => {
    const [cards, setCards] = React.useState<ReactElement[] | []>([]);
    
    React.useEffect(() => {
      const slideCards = _.map(demoSlides, (demoTitle, i) => <SlideCard identifier={i} handleClick={handleSelection} key={i}>{demoTitle}</SlideCard>);
      setCards(slideCards);
    }, [demoSlides, handleSelection])

    return (
      <ContentContainer>
          {cards}
      </ContentContainer>
    )
}