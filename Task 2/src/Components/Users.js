import React,{useState} from "react";
import axios from "axios";

//func = components , these are used as tags when exported

/*function Users(props){
    return <h1>Welcome {props.name} !</h1>    
}*/

function Users (){

    //users = current value setUsers = func
    const [users,setUsers] = useState([]);
    const [showSpinner,setShowSpinner]=useState(false);


    //func to get users
    const getUsers = async() =>{

        setShowSpinner(true);
        const res = await axios.get('https://reqres.in/api/users?page=1')

        console.log(res) //get response of API in console
        const userData = res.data.data;
        setUsers(userData)
        }

    return(
    <div id="users">
        <button onClick={getUsers} id="get">Get Users</button>

        <ul>
           
            {users.map(user =>(
                    <li key={user.id} className="user">
                        <div>
                            <img src={user.avatar} className="avatar"/>
                        </div>
                        <div className="info">
                            <b>Name :</b> {user.first_name} {user.last_name} <br/><b> Email :</b> {user.email}
                        </div>
                        
                    </li>
                ))}

        </ul>
    </div>
        
    ) 
     
}
export default Users;