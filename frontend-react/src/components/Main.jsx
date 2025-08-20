import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>
                Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and Popper. Place one of the following near the end of your pages, right before the closing to enable them.
                </p>
                <Button text='Login' class='btn btn-outline-info' />
            </div>
        </div>
    </>
  )
}

export default Main
