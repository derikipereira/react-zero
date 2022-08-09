import React, { cloneElement } from "react";

import FamiliaMembro from './FamiliaMembro'

export default props => {

    return (
        <div>
            {
            React.Children.map(props.children, (child) => {
                return cloneElement(child, props)
            })
            }
        </div>
    )
}