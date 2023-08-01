'use client'
import { useState } from 'react';

export default function UpdatingScreen() {
    const  [age,setAge] =useState(0)
    function handleClick() {
        setAge(age + 1);
      }
    
    return (
      <>
       <div className="px-12 mt-8">
      <button onClick={handleClick}
        className="bg-red-800 w-[200px] h-10 rounded-full "
        
      >
        Click Me! {age} times
      </button>
    </div>
      </>
    );
  }