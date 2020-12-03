import React, { Component } from "react";
import Test3Item from "./Test3Item";

class Test3List extends Component {
    render() {
        const { data, onRemove } = this.props;
        return (
            <>
                {data.map((item) => (
                    <Test3Item item={item} onRemove={onRemove} />
                ))}
            </>
        );
    }
}

export default Test3List;
