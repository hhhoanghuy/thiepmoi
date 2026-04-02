import React from 'react';

interface ElegantButtonProps {
    onClick: () => void;
    onTouchStart: () => void;
    ariaLabel: string;
    children: React.ReactNode;
}

const ElegantButton: React.FC<ElegantButtonProps> = ({ onClick, onTouchStart, ariaLabel, children }) => {
    return (
        <button
            className="w-12 h-12 rounded-full bg-rose-100 border-2 border-rose-300 shadow-md
                 flex items-center justify-center transition-all duration-300
                 hover:bg-rose-200 hover:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50"
            onClick={onClick}
            // onTouchStart={onTouchStart}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export default ElegantButton;

