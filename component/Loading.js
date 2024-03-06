import React from 'react';

export default function Loading(props){

        return(
            <div className="text-center">
                <img className="loader" src="loading.gif" alt="loader" height={props.height?props.height:""} width={props.width?props.width:""}/>
            </div>
        )
    
}