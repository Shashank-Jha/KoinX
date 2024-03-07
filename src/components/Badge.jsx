import React from 'react';

const Badge = (prop) => {
    let className = 'text-xs font-medium me-2 px-2.5 py-1 ml-2 rounded';
    if (prop.data < 0) {
        className += ' bg-red-200 text-red-500';
    } else {
        className += ' bg-green-200 text-green-500';
    }

    return (
        <span className={className}>
            <span className='pr-2'>{prop.data < 0 ? '▼' : '▲'}</span>
            {(prop.data)}%
        </span>
    );
};

export default Badge;
