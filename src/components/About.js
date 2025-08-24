import User from "./User";
import UserClass from "./UserClass";
const About = () =>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is namaste react web series</h2>
            {/* <User name={"vivek kumar sharma"}/> */}
            <UserClass name={"Vivek kumar sharma"}/>
        </div>
    )
}

export default About;