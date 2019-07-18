import React from "react";

function Item({ item }) {

    return (<div><p>{item.title}</p>
        <p>{item.desc}</p></div>);
}

export default Item;
