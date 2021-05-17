import React from 'react'
import {connect } from 'react-redux'
import { mapStateToProps } from '../store/selector/cakeSelector'
import { buyCake } from '../store/actions/cakeActions'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:() => dispatch(buyCake())
    }
}


export default connect(mapStateToProps ,mapDispatchToProps)(CakeContainer);
