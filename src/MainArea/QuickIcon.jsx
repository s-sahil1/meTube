import React from 'react';

function QuickIcon({ Icon, Name }) {

    return (<div className='Quick_Icon'>
        <Icon color='black' fontSize={'1.5rem'} />
        <div>{Name}</div>
    </div>);
}

function PremiumIcon({ Icon, Name }) {
    return(<div className='Quick_Icon'>
        <Icon color='orange' fontSize={'1.5rem'} />
        <div>{Name}</div>
    </div>)
}

export default QuickIcon;
export {PremiumIcon};
