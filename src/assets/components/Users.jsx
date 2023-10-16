import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedUser = useLoaderData();
    const [users, setUser] = useState(loadedUser)
   
    console.log(users);
    const handleDelete = (_id)=>{
        console.log('Deleating id', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                const remaining = users.filter(user => user._id !== _id)
                setUser(remaining);
                alert('Deleted Successfully');

            }
           
        })
    }

   
    return (
        <div>
            <h1 className="text-2xl">All Users:{users.length}</h1>
            <div>
                {
                    users.map(user=><p 
                        key={user._id}>
                            {user.name}:{user.email}:{user._id}
                            <button onClick={()=>handleDelete(user._id)}>X</button>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Users;