import React, {useState} from 'react'
import {connect } from 'react-redux'
import { mapStateToProps } from '../store/selector/cakeSelector'
import { buyCake } from '../store/actions/cakeActions'

function CakeContainer(props) {
    const [state, setstate] = useState(1);
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input type="text" value={state} onChange ={e => setstate(e.target.value)} />
            <button onClick={() => props.buyCake(state)}>Buy {state} cake</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:(state) => dispatch(buyCake(state))
    }
}


export default connect(mapStateToProps ,mapDispatchToProps)(CakeContainer);
