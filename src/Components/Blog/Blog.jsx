import React from 'react';

const Blog = () => {
    return (
        <div className='mx-10 mt-32'>
            <h2 className='text-2xl text-green-600 pb-2'>When we use context Api?</h2>
            <p>The Context API is a feature in React, a popular JavaScript library for building user interfaces, that allows you to share data across multiple components without having to pass it explicitly as props from parent to child components. It is used when you need to manage state or share data that needs to be accessible to multiple components in a React application.</p>  
            <h2 className='text-2xl text-green-600 pb-2'>What is custon hooks?</h2>
            <p>Custom hooks are a way to reuse logic or stateful behavior in functional components in React. They are custom JavaScript functions that follow specific naming conventions and can be used to encapsulate and share common logic across multiple components in a React application. Custom hooks allow you to abstract complex logic into reusable functions that can be easily imported and used in different components, improving code reusability and maintainability.</p>  
            <h2 className='text-2xl text-green-600 pb-2'>What is useref?</h2>
            <p>useRef is a built-in hook in React that provides a way to create a mutable reference to a value or a DOM element in a functional component. It allows you to access and modify the current value of a reference without triggering a re-render of the component, unlike using state with useState or useReducer. useRef is typically used for managing mutable values or interacting with the DOM in React.</p>  
            <h2 className='text-2xl text-green-600 pb-2'>What is usememo?</h2>
            <p>useMemo is a built-in hook in React that allows you to memoize the result of a computation and cache it, so that it is only recomputed when its dependencies change. It helps optimize performance by preventing unnecessary re-computations of expensive operations in functional components.</p>  
        </div>
    );
};

export default Blog;    