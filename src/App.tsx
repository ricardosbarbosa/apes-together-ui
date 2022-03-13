import './App.css';
import Button from '@mui/material/Button';
import ThemeProvider from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <Button variant="contained"> Olá Mundo</Button>;
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
