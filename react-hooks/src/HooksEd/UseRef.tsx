'use client'
import React, { useEffect, useRef } from 'react';

const UseRef = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (titleRef.current) {
            console.log(titleRef.current.offsetHeight);
        }
    }, []);

    return (
        <div>
            <h1 ref={titleRef}>Hello, World!</h1>
        </div>
    );
};

export default UseRef;
