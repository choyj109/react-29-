import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CardList from './components/CardList';

function App() {
  const title = 'site';
  return (
    <div className="App">
      <Header title={title} />
      <Main />
      <CardList />
      <Footer title={title} />
    </div>
  );
}

export default App;
