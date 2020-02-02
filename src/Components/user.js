import React , {Component}from 'react'
import { updateUser,removeUser } from '../Redux/Action/authAction'
import { connect } from 'react-redux'

class user extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        console.log('this.props*******',this.props); 
        this.props.updateUser({name:'Habib',age:21 })
        setTimeout(() => this.props.removeUser(),4000)
    }
    componentWillReceiveProps(nextProps){
        console.log('user*******',nextProps.user)
    }

    render(){
        return(
            <div>
                <h1>Redux practice</h1>
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
    return{
        updateUser: (user) => dispatch(updateUser(user)),
        removeUser: () => dispatch(removeUser())
 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(user)