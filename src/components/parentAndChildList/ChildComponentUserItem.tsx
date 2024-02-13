// Typescript

import React from "react";

type Props = {
    name: string;
    age: number;
}

function UserItem(props: Props) {
    return ( 
        <div>
            <p>{props.name} {props.age}</p>
        </div>
    );
}

export default UserItem;