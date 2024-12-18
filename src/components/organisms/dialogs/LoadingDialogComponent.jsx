import React, { useEffect } from 'react';
import './LoadingDialogComponent.scss';
function LoadingDialogComponent(props){

    useEffect(() => {

    },[])

    return (
        <React.Fragment>
            <div className="LoadingDialogComponent">

                <div className="bg"></div>
                <div className="body-loading">
                    <div className="loader-body">
                        <div className="lds-ellipsis">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <small>Please wait...</small>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LoadingDialogComponent;