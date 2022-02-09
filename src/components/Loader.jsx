import React from 'react';
import Icon from '@mui/material/Icon';

const Loader = () => {
     return (
        <div>
            <Icon  fontSize="large" baseClassName="fas" className="fa fa-cog fa-spin"  />
        </div>
     )
}

export default Loader;