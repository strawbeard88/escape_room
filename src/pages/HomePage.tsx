import { Link } from 'react-router-dom';
import roomsData from '../data/rooms.json';
import InventoryPanel from '../components/InventoryPanel';

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="intro-card">
        <h1 className="game-title">PROJECT NEXUS</h1>
        <h2>Escape the System</h2>
        <p>
          Du har vaknat upp instängd i Project NEXUS – en övergiven AI-forsknings­anläggning
          vars säkerhetssystem slagit om till nödläge. Dörrarna är låsta, kamerorna är
          avslagna och du är ensam.
        </p>
        <p>
          För att ta dig ut måste du ta dig igenom sex rum, lösa pusslen och samla
          de föremål som leder dig till utgången. Varje rum kräver ett föremål –
          och belönar dig med nästa.
        </p>
        <p className="start-hint">
          Du har ett <strong>UV-ljus</strong> i fickan. Börja i Server Room.
        </p>
      </div>

      <div className="room-list">
        <h3>Anläggningens rum</h3>
        <ul>
          {roomsData.map((room) => (
            <li key={room.id}>
              <Link to={`/room/${room.roomPath}`} className="room-link">
                {room.roomName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <InventoryPanel />
    </div>
  );
}
