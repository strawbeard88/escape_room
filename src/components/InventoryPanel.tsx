import { useGame } from '../context/GameContext';

export default function InventoryPanel() {
  const { inventory } = useGame();

  return (
    <div className="inventory-panel">
      <h3>Inventorium</h3>
      {inventory.length === 0 ? (
        <p className="empty-inventory">Inga föremål.</p>
      ) : (
        <ul className="inventory-list">
          {inventory.map((item) => (
            <li key={item.id} className="inventory-item">
              {item.image && (
                <img src={item.image} alt={item.name} className="item-image" />
              )}
              <div className="item-info">
                <span className="item-name">{item.name}</span>
                <span className="item-description">{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
