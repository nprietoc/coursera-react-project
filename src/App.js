import React,{useState} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponente from './components/MenuComponent';
import { DISHES } from './shared/dishes';

function App() {
  const [data, setData] = useState(DISHES)

  
  
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
        </div>
      </Navbar>
      
      <MenuComponente inform={data} />
      
  </div>
  );
}

export default App;
