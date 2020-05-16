import Link from 'next/link'
import { Button, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    //   <Link href='/'><a className="navbar-brand">Pokemons</a></Link>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   {/* <Button variant="primary">Primary</Button> */}
    //   <div className="collapse navbar-collapse" id="navbarColor01">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item active">
    //         <Link href='/'><a className="nav-link">Home</a></Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link href='/about'><a className="nav-link">About</a></Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link href='/pokemons/1'><a className="nav-link">Pokemons</a></Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

<Navbar className="navbar navbar-expand-lg navbar-dark bg-primary mb-4" bg="dark" expand="lg">
  <Link href='/'><a className="navbar-brand">Pokemons</a></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link href='/'><a className="nav-link">Home</a></Link>
      <Link href='/about'><a className="nav-link">About</a></Link>
      <Link href="/pokemons/[id]" as={`/pokemons/1`}><a className="nav-link">Pokemons</a></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  );
}

export default NavBar;

// <style jsx>{`
//           ul {
//             display: flex;
//             background: #333;
//             list-style: none;
//           }
//           li button {
//             margin: 10px;
//           }
//         `}</style>