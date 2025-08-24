import React from 'react'
import UserContext from '../utils/UserContext';
class UserClass extends React.Component {

   constructor(props){

    super(props);

    this.state = {
        userInfo: {
            name: "Dummy",
            locaton: "Default"
        }
    }
   }

  

    async componentDidMount(){
     //In new function component 
    // useEffect(()=>{},[])
     console.log("component did mount")
     // API Calls here , 
     const data = await fetch("https://api.github.com/users/viveksharma8107")
     const json = await data.json();

     this.setState(
        {
            count:0,
            userInfo: json
        }
     )

     this.timer = setInterval(()=>{
        console.log("timer started")
     },1000)
    }

    componentDidUpdate(prevProps,prevState){
    //In new functional component 
    // useEffect(()=>{},[count1,count2])


    if(this.state.count !== prevState.count|| this.state.count1 !== prevState.count1){
        //do something
    }


    }

    /**
     * NEW FUNCTIONAL COMPONENT unmount
     * useEffect(()=>{
     * const timer = setInterval(()=>{
        console.log("timer started")
         },1000)


         return ()=>{
            clearInterval(timer);
            }
     * })
     */
    componentWillUnmount(){
     clearInterval(this.timer);
    }

    render() {
        const { name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                LoggedIn User:
                <UserContext.Consumer>
                    {(data)=><h1>{data.loggedInUser}</h1>}
                </UserContext.Consumer>
                {/* <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Increase count</button>
                <h1>Count: {this.state.count}</h1> */}
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: xxxxxxxxxx</h4>
            </div>
        )
    }
}

export default UserClass;

/***React Life cycle 
 * 
 * ----Mounting----
 * 
 * Constructor
 * Render(dummy)
 *     <html dummy>
 * ComponentDidMount
 *     <Api calls>
 *     this.setState - state var upated
 * 
 * 
 * ----Update------
 * 
 * Render(api data)
 *    <HTml> new api data
 * ComponentDidUpdate
 * 
 * 
 * ------Unmounting-----
 * 
 * ComponentwillUnMount
 */