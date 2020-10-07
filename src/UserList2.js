import React from 'react';

function User({user}){
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList2(){
    const users = [
        {
            id:1,
            username:'velopert',
            email: 'pb@emart.com'
        },
        {
            id:2,
            username : 'testuser2',
            email: 'testuser2@emart.com'
        },
        {
            id:3,
            username:'lilly',
            email: 'lilly@emart.com'
        }
    ];

    return (
        <div>
        {users.map((user,index) =>(
            <User user={user} key={index}/>
        ))}
        </div>
    );
}

export default UserList2;