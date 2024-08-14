import * as React from "react";

type COMPONENT_NAMEProps = {
    text: string,
};

const COMPONENT_NAME: React.FC<COMPONENT_NAMEProps> = ({ text }) => {
    return (
        <div>
            <p>{text}</p>
        </div>
    );
};

export default COMPONENT_NAME;
