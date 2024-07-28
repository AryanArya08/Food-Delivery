import React from 'react';

class Profile extends React.Component{

    constructor(props){
        super(props);
        // Create State
        this.state ={
           userInfo:{
            name:"Dummy",
            location:"Dummy Loc"
           }
        };  
        console.log("Child -Constructor"+this.props.name)
    }

   /*  async */ componentDidMount(){
        // API Calls
        /* const data = await fetch("https://api.github.com/users/Aman0786-git");
        const json = await data.json();
        // console.log(json)
        this.setState({
            userInfo:json, 
        }) */
        this.timer = setInterval(()=>{
          // console.log("Hello React!")

        },1000);
        console.log("Child- Component Did Mount"+this.props.name);
    }

    
  componentDidUpdate(prevProps,prevState){
    if(
      this.state.count!==prevState.count || 
      this.state.count!==prevState.count 
      ){
        //Code
      }
    console.log("Component Did Update");
  }

  componentWillUnmount(){
    console.log("Component Will Unmount");
    clearInterval(this.timer);

  }

    // render method is the most important part of Class Based Component
    render(){
        const {count}=this.state;
        console.log("Child -Render"+this.props.name)
        // console.log(this.state.userInfo)
        return(
        <div>
            <h2>Profile Class Component</h2>
            <h3>Name:{this.state.userInfo.name}</h3>
            <img src={this.state.userInfo.avatar_url} />
            <h3>Location:{this.state.userInfo.location}</h3>
        </div>
            ) 

    }
}

export default Profile;

/* 
Child -ConstructorFirst Child
Child -RenderFirst Child
Child- Component Did MountFirst Child
  
API Call is made
Set State

<Update Cycle>
render
*/