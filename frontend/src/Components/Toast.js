import React, { useState } from 'react';

import "./../css/components/toast.css";

import TooltipButton from './TooltipButton';

import { useEffect } from 'react';

const Toast = ({

    id,
    message,
    hasButton,
    buttonText,
    buttonFunction,
    tooltipContent,
    dispose,
    isLast

}) => {

    const [toastState, setToastState] = useState(0);
    const timeToLive = 6000;

    useEffect(() => {
        setTimeout(() => {
            setToastState(1);
        }, 10);
        setTimeout(() => {
            setToastState(2);
            setTimeout(() => {
                dispose(id);
            }, 300);
        }, timeToLive);
    }, []);

    return (
        <div className={`toast ${
            toastState === 0
                ? "entry-point"
                : (toastState === 2
                    ? "removed"
                    : ""
                )
            }`
        }>
            <div className='message'>{message}</div>
            {
                hasButton &&
                <div className='btn-container'>
                    <TooltipButton 
                        buttonFunction={buttonFunction} 
                        buttonClassList={'primary-btn'} 
                        buttonDisabled={!isLast} 
                        buttonContent={buttonText} 
                        tooltipDirection={0} 
                        tooltipContent={tooltipContent}
                    />
                </div>
            }
        </div>
    )
}

export default Toast