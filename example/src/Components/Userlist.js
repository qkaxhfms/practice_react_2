import React from 'react';

function User({user}){
    return (
      <div>
        <b>{user.username}</b> <span>({user.email})</span>
      </div>
    );
}

function Userlist(){
    const users = [
      {
        id: 1,
        username: "velopert",
        email: "public.velopert@gmail.com",
      },
      {
        id: 2,
        username: "tester",
        email: "tester@example.com",
      },
      {
        id: 3,
        username: "liz",
        email: "liz@example.com",
      },
    ];

    return (
      <>
        {users.map((user, index) => (
          <User user={user} key={index}/>
        ))}
      </>
    );
}

export default Userlist;