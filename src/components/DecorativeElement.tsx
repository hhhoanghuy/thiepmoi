import React from 'react';

const DecorativeElement: React.FC = () => {
    return (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L23.5 14.5H36.5L26 21L30 32L20 25.5L10 32L14 21L3.5 14.5H16.5L20 4Z" fill="#FBCFE8" stroke="#F9A8D4" strokeWidth="2"/>
            </svg>
        </div>
    );
};

export default DecorativeElement;