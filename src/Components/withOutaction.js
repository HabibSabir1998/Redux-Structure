import React , {Component}from 'react'
import { connect } from 'react-redux'

class WithOutaction extends React.Component{
    constructor(){
        super();
    }
    componentWillReceiveProps(nextProps){
        console.log('next props from withoutaction',nextProps.user)
    }

    render(){
        return(
            <div>
                <h1>-----------------</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("State from Component***",state)
    return{
        user:state.authReducers.user
    }
}

const mapDispatchToProps = (dispatch) => {
    // return{}
    
    }

export default connect(mapStateToProps,mapDispatchToProps)(WithOutaction)