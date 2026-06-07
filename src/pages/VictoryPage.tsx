import { Link } from 'react-router-dom';
import { useGame } from '../context/GameContext';

export default function VictoryPage() {
  const { inventory } = useGame();

  return (
    <div className="victory-page">
      <div className="victory-card">
        <h1 className="victory-title">SYSTEM UNLOCKED</h1>
        <h2>Du har rymt från Project NEXUS!</h2>
        <p>
          Mot alla odds lyckades du ta dig igenom anläggningens sex sektioner,
          lösa varje pussel och till slut häva nedlåsningen. Utgångsdörren glider
          upp – friheten väntar.
        </p>

        <div className="collected-items">
          <h3>Insamlade föremål ({inventory.length})</h3>
          <ul>
            {inventory.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>

        <Link to="/" className="play-again-button">
          Spela igen
        </Link>
      </div>
    </div>
  );
}
