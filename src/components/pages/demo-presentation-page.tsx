import React from 'react';
import { DemoPresentation } from '../organisms/demo-presentation';
import { demoSlides, routes, presentationTime } from '../../mockData/demo-constants';
import { styled } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import DemoTemplate from '../templates/demo-presentation-template';
import { SlideModal } from '../molecules/slide-modal';
import { DemoButton } from '../atoms/demo-button';

const ModalContent = styled('div')({
    alignItems: 'center',
    backgroundColor: 'white',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '10rem',
    padding: '5rem',
    textAlign: 'center',
})

export const DemoPresentationPage: React.FC = () => {
    const [endTime, setEndTime] = React.useState<null | Date>(null);
    const [fullPresentationTime, setFullPresentationTime] = React.useState<number>(0);
    const history = useHistory();

    React.useEffect(() => {
      if (endTime) {
        setFullPresentationTime(presentationTime) // in real app, would calculate difference between start_time and end_time
      }
    }, [endTime])

    const modalContent = (
        <ModalContent>
            {`Presentation time: ${fullPresentationTime} minutes`}
            <DemoButton handleClick={() => history.push(routes.demoList) }>Home</DemoButton>
        </ModalContent>
    )
    const endTimeModal = <SlideModal handleButtonClick={setEndTime} buttonLabel="Stop">{modalContent}</SlideModal>;
    return (
        <DemoTemplate header={endTimeModal} >
            <DemoPresentation demoSlides={demoSlides} />
        </DemoTemplate>
    );
}

export default DemoPresentationPage