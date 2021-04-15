
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponente from './components/MenuComponent';

function App() {

  
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restorante</NavbarBrand>
        </div>
      </Navbar>
      
      <MenuComponente />
      
    </div>
  );
}

export default App;
