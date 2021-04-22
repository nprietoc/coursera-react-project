import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponente from './components/MenuComponent';
import { DISHES } from './shared/dishes';

function App() {
    
  
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
        </div>
      </Navbar>
      
      <MenuComponente inform={DISHES} />
      
  </div>
  );
}

export default App;
