import React from "react";

export const Add = (props)=> {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>For Addition</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-success"
                            onClick={props.mathChange}>Addition</button>
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
                        <h1>After Action</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <h4>Number: {props.Addnumbers}</h4>
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
                        <h1>For Subtract</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-warning"
                            onClick={props.mathChange}>Subtract</button>
                    </div>
                </div>
            </div>
        );
    
}

