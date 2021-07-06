import React from 'react';
import { styled } from '@material-ui/core';
import { DemoSlideCards } from '../molecules/demo-slide-cards';

interface IDemoPresentation { demoSlides: string[] }

const ContentContainer = styled('div')({ 
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '70%',
});

const SelectedSlideContainer = styled('div')({ 
  textTransform: 'capitalize',
  fontSize: '15rem',
});
const DemoSlideContainer = styled('div')({
  maxHeight: '98vh',
  overflowY: 'scroll',
  width: '20rem',
  border: '1px solid black',
  padding: '0.5rem'
})

export const DemoPresentation: React.FC<IDemoPresentation> = ({ demoSlides }) => {
    const [selectedDemo, setSelectedDemo] = React.useState<string | number>(demoSlides[0]);
    const handleSelectedDemo = (identifier: number) => setSelectedDemo(demoSlides[identifier]);
    return (
      <ContentContainer>
       <DemoSlideContainer>
         <DemoSlideCards demoSlides={demoSlides} handleSelection={handleSelectedDemo} />
        </DemoSlideContainer>
        <SelectedSlideContainer>{selectedDemo}</SelectedSlideContainer>
      </ContentContainer>
    )
}