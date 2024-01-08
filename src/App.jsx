import { useState } from 'react';
import Person from './components/Person';
import data from './data';

const App = () => {
  const [birthdayList, setBirthdayList] = useState(data);

  return (
    <div className='person-container'>
      <h2 className='person-headline'>{`${birthdayList.length} Birthdays today`}</h2>
      <ul className="person-list">
        {birthdayList.map(person => <Person key={person.id} {...person} />)}
      </ul>
      {birthdayList.length ? <button className="btn" name='clear-list' id="clear-list" onClick={() => {setBirthdayList([])}}>Clear List</button> : null}      
    </div>
  )
};
export default App;
