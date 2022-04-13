import React from 'react';
import footerbg from '../../../images/footerbg.jpg';


const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img className='w-100' src={footerbg} alt="" />
        </div>
    );
};

export default NotFound;