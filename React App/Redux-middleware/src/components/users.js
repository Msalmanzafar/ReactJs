import React from "react";

export const Uers = (props)=> {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <h4>User Name: {props.username}</h4>
                    </div>
                </div>
            </div>
        );
    
}