import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div className='cards-container'>
        <Card />
        <Card showSkills={false} />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
