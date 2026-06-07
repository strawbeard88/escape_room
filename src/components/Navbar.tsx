import { Link, NavLink } from 'react-router-dom';
import roomsData from '../data/rooms.json';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        PROJECT NEXUS
      </Link>
      <ul className="nav-rooms">
        {roomsData.map((room) => (
          <li key={room.id}>
            <NavLink
              to={`/room/${room.roomPath}`}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {room.roomName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
