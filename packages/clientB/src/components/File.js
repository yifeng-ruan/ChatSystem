import React from 'react'

const File = props =>
    <div className='button'>
        <input type='file' id='single' onChange={props.onChange} />
    </div>


export {
    File
}