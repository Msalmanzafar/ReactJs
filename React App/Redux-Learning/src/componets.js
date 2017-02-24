import React from 'react';
import UserList from './user-list';
import UserDetail from './user-detail';

const App = () =>(
    <div>
        <h2>UserName List</h2>
            <UserList/>
        <hr/>
        <h2>UserDetail List</h2>
            <UserDetail />
    </div>
);

export default App;