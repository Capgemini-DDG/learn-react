import React from 'react';
import avatar from './avatar.png';

const Header = props => <h1>Hello {props.name}!</h1>;

const Avatar = () => (
  <div>
    <img width='100px' height='100px' src={avatar}/>
    <p>
      Age: 25 <br/>
      Profession: Web Dev
    </p>
  </div>
);

const App = props => {
  return (
    <div>
      <Header name='Joe Bloggs'/>
      <Avatar/>
      <table>
        <thead>
          <tr>
            <th>Technology</th>
            <th>Level of XP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React</td>
            <td>Expert</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>Expert</td>
          </tr>
          <tr>
            <td>HTML</td>
            <td>Experienced</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>Novice</td>
          </tr>
        </tbody>
      </table>
      <h2>Contact Details:</h2>
      <p>
        Phone: 01234 678 923 <br/>
        Email: joe.bloggs@coolmail.com
      </p>
    </div>
  )
}

export default App;
