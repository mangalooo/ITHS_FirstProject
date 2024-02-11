

import UserItem from "./ChildComponentUserItem";

function UserList() 
{
    const users = [
        { name: 'Magnus Leanderson', age: 39 },
        { name: 'Linda Olausson', age: 29 },
        { name: 'Rasmus Andersson', age: 19 }
    ];

    return (
        <div>
            <h1>User list</h1>
            {users.map((user, index) => (
                <UserItem
                    key={index}
                    name={user.name}
                    age={user.age}
                />
            ))}
        </div>
    );
}

export default UserList;