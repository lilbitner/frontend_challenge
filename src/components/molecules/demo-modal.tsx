import React from 'react';
import { styled } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import { DemoButton } from '../atoms/demo-button';
import _ from 'lodash';

const StyledModal = styled(Modal)({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
})

interface ISlideModal { children: any, buttonLabel: string, handleButtonClick?: (values:Date) => void };

export const SlideModal: React.FC<ISlideModal> = ({ children, buttonLabel, handleButtonClick = _.noop }: ISlideModal) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
      handleButtonClick(new Date()); // send stop time
    };
    const handleClose = () => setOpen(false);

    return (
        <>
            <DemoButton handleClick={handleOpen}>{buttonLabel}</DemoButton>
            <StyledModal
                open={open}
                onClose={handleClose}
                >
                {children}
            </StyledModal>
        </>
    )
}