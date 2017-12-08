import React from 'react';
import store from '../store';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Welcome to the Interplanetary Academy of Javascript</h1>
        <ul>
            <li>
              <Link to="/campuses">Campuses</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
        </ul>
      </div>
    )
}

export default Home;

