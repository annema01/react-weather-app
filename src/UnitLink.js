import React from "react";

export default function UnitLink(props) {




    return (
        <a onClick={ props.handle } href="/" className={ `${props.individualClass}${props.mobile}${props.isActive}` }>
            { props.unit }
        </a>
    );

}