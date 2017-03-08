import React from "react";

export const Add = (props)=> {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>This is Math Component</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={props.mathChange}>Change the number</button>
                    </div>
                </div>
            </div>
        );
    
}

export const AddNumbers = (props)=> {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Number Component</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>User Number: {props.Addnumbers}</p>
                    </div>
                </div>
            </div>
        );
    
}

export const Subtract = (props)=> {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Number Component</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>User Number: {props.Addnumbers}</p>
                    </div>
                </div>
            </div>
        );
    
}