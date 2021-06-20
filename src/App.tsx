import React from 'react';
import './App.css';

function App() {
    const names = ['Dimych', 'Vlad', 'Denis', 'Andrei'];
    const users = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Denis'},
        {id: 4, name: 'Andrei'}];

    const liElements = names.map((n, i) => <li key={i}>{n}</li>);
    const liUsers = users.map(u => <li key={u.id}>{u.name}</li>);

    return (
        <div className="App">
            <ul>
                {liElements}
                {liUsers}
            </ul>
        </div>
    );
}

export default App;
