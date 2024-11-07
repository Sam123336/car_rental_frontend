import reactDom from 'react-dom/client';
import App from './App';
import './index.css';


const AppLayout = ()=>{
    return(<div className="app">
      <App/>
        
    </div>
    );
  };
  const root = reactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);