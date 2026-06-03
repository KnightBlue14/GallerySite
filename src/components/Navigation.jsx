import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{
      background: '#1a1a1a',
      padding: '1rem 2rem',
      display: 'flex',
      gap: '1.5rem'
    }}>
      <NavLink to="/" style={({ isActive }) => ({
        color: isActive ? '#fff' : '#aaa',
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal',
        transition: '0.2s'
      })}>Home</NavLink>
      <NavLink to="/about" style={({ isActive }) => ({
        color: isActive ? '#fff' : '#aaa',
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal',
        transition: '0.2s'
      })}>About</NavLink>
      <NavLink to="/gallery" style={({ isActive }) => ({
        color: isActive ? '#fff' : '#aaa',
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal',
        transition: '0.2s'
      })}>Gallery</NavLink>
    </nav>
  );
}

export default Navigation;