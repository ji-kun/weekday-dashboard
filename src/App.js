import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { requestOptions } from './api';

function App() {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    .then((response) => response.json())
    .then((result) => setJobs(result.jdList))
  }, []);

  return (
    <div className="App">
      <div className='cards-container'>
        {
          jobs && jobs.map((job) => <Card job={job} />)
        }
      </div>
    </div>
  );
}

export default App;
