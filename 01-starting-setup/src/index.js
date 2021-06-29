//imports the react library to use react features
import ReactDOM from 'react-dom';

//this is the first file to execute
import './index.css';

//imports this file
import App from './App';

//render nethod from React DOM 
//two parameters, first , second is a defaukt JavaScriot DOM API
//the root comes from public/index.html (one page app)
ReactDOM.render(<App />, document.getElementById('root'));
