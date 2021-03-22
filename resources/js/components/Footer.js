import React from 'react';

function StyledFooter() {
    return (
        <footer style={{flexBasis: '50px'}} className="justify-center flex flex-col flex-grow-0 flex-shrink-0 relative bg-white dark:bg-darker" >
            <p className="align-middle" style={{textAlign:"center"}}>COMP353 - Databases Main Project</p>
        </footer>
    );
}

export default StyledFooter;
