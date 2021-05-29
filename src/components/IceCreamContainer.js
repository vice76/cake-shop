import React from 'react'
import {connect } from 'react-redux'
import { mapStateToProps } from '../store/selector/IceCreamSelector'
import { buyicecream } from '../store/actions/icecreamActions'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCream - {props.numOfIceCream}</h2>
            <button onClick= {props.buyicecream}>Buy IceCream</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        buyicecream:() => dispatch(buyicecream())
    }
}


export default connect(mapStateToProps ,mapDispatchToProps)(IceCreamContainer);
