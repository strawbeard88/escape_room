import { useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import type { Room } from '../types';
import roomsData from '../data/rooms.json';
import itemsData from '../data/items.json';
import { useGame } from '../context/GameContext';
import InventoryPanel from '../components/InventoryPanel';
import HintButton from '../components/HintButton';

const rooms = roomsData as Room[];

export default function RoomPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const { inventory, addItem } = useGame();
  const [exitSolved, setExitSolved] = useState(false);

  const room = rooms.find((r) => r.roomPath === roomId);
  if (!room) return <Navigate to="/" replace />;

  // G-krav 8: härled löst-status från inventoriet
  // Specialfall: Exit Node har itemToAdd === null, använd lokal state
  const isSolved =
    room.itemToAdd !== null
      ? inventory.some((i) => i.id === room.itemToAdd)
      : exitSolved;

  const hasRequiredItem = inventory.some((i) => i.id === room.itemToSolve);
  const requiredItem = inventory.find((i) => i.id === room.itemToSolve);

  function handleSolve() {
    if (!room || isSolved || !hasRequiredItem) return;

    if (room.itemToAdd !== null) {
      const rewardId = room.itemToAdd;
      const reward = itemsData.find((i) => i.id === rewardId);
      if (reward) addItem(reward);
    } else {
      // Exit Node: lokal state + navigera till vinstskärm
      setExitSolved(true);
      navigate('/victory');
    }
  }

  return (
    <div className="room-page">
      <div className="room-image-container">
        <img
          src={isSolved ? room.solvedImage : room.unsolvedImage}
          alt={room.roomName}
          className="room-image"
        />
      </div>

      <div className="room-content">
        <h1 className="room-name">{room.roomName}</h1>

        <p className="room-instruction">
          {isSolved ? room.solvedInstruction : room.unsolvedInstruction}
        </p>

        <HintButton hint={room.hint} />

        {!isSolved && (
          <div className="puzzle-section">
            {hasRequiredItem ? (
              <button onClick={handleSolve} className="solve-button">
                Använd: {requiredItem?.name}
              </button>
            ) : (
              <p className="missing-item">
                Du saknar rätt föremål för att lösa det här rummet.
              </p>
            )}
          </div>
        )}

        {isSolved && room.itemToAdd !== null && (
          <p className="reward-text">
            Du hittade: <strong>{itemsData.find((i) => i.id === room.itemToAdd)?.name}</strong>
          </p>
        )}
      </div>

      <InventoryPanel />
    </div>
  );
}
