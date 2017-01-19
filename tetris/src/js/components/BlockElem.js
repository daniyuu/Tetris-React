import React, {Component} from 'react';

class BlockElem extends Component {
    constructor(isBlank) {
        super();
    }

    render() {
        return (
            <div className={this.props.isBlank ? "BlockElemBlank" : "BlockElemTetris"}/>
        );
    }
}

export default BlockElem;