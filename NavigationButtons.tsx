import React from 'react';
import ElegantButton from './ElegantButton';

interface NavigationButtonsProps {
    goToPrevious: () => void;
    goToNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ goToPrevious, goToNext }) => {
    return (
        <div className="fixed bottom-6 right-8 flex space-x-4">
            <ElegantButton
                onClick={goToPrevious}
                onTouchStart={goToPrevious}
                ariaLabel="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </ElegantButton>
            <ElegantButton
                onClick={goToNext}
                onTouchStart={goToNext}
                ariaLabel="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </ElegantButton>
        </div>
    );
};

export default NavigationButtons;