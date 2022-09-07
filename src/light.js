import React from "react";

const Light = ({ color }) => {
    return (
        <div>
            <div className="light" style={{backgroundColor: color }}> </div>
        </div>
    )
}
export default Light;