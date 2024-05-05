import { useEffect, useState } from 'react';

import { requestOptions } from './api';
import Card from './components/Card';
import Filters from './components/Filters';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const [filters, setFilters] = useState({
    roles: null,
    experience: null,
    name: '',
    salary: null,
  });
  
  useEffect(() => {
    fetchData()
  }, [offset]);

  const fetchData = async () => {
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions(JSON.stringify({
      "limit": 12,
      "offset": offset,
    })))
    .then((response) => response.json())
    .then((result) => {
      let temp = [...jobs, ...result.jdList];
      setReachedEnd(temp.length >= result.totalCount)
      setJobs(temp)
    })
  }

  useEffect(() => {
    let temp = jobs;

    if(filters?.experience) {
      temp = temp.filter((job) => job.minExp && job.minExp >= Number(filters?.experience))
    }
    if(filters?.name !== '') {
      temp = temp.filter((job) => job.companyName.toUpperCase().includes(filters?.name.toUpperCase()))
    }
    if(filters?.roles) {
      temp = temp.filter((job) => job.jobRole && job.jobRole.toUpperCase() === filters?.roles.toUpperCase())
    }
    if(filters?.salary) {
      temp = temp.filter((job) => job.minJdSalary && job.minJdSalary >= Number(filters?.salary))
    }

    setFilteredJobs(temp);
  }, [filters, jobs])

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= scrollHeight - 20 && !isBottom) {
      setIsBottom(true);
      if(!reachedEnd) {
        setOffset((prevCount) => prevCount + 1);
      }
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isBottom]);

  return (
    <div className="App">
      <Filters setFilters={setFilters} />
      <div className='cards-container'>
        {
          filteredJobs && filteredJobs.map((job, index) => (
            <Card 
              key={index}
              job={job}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
