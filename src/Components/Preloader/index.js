import React from 'react'
import PropTypes from 'prop-types'
import './load.css'


const ProgressBar = ({max,value}) => {
    return (
        <>
        <div className='load'>
            <h1 className='loadt'>LOADING </h1>
        <progress classname='pace' value={value} max={max}/>
        </div>
        </>
    )
};
ProgressBar.propTypes ={
    value:PropTypes.number.isRequired,
    max:PropTypes.number,
}

ProgressBar.defaultProps={
    max:100
}

export default ProgressBar
