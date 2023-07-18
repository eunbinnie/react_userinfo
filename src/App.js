import React from 'react'
import { useState } from 'react';
import './App.css'
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {
    // state로 관리
    const [users, setUsers] = useState([]);

    // 사용자 추가
    function addUser(newUser) {
        setUsers([...users, newUser]);
    }

    return (
        <main className='mainContainer'>
            <h1>추가하삼</h1>
            <AddUser addUser={addUser} />

            <span>사용자 리스트</span>
            <UserList users={users} />
        </main>
    );
}

export default App;
