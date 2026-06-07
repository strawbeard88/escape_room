import { useSearchParams } from 'react-router-dom';

interface Props {
  hint: string;
}

export default function HintButton({ hint }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const hintVisible = searchParams.get('hint') === 'true';

  function toggle() {
    const updated = new URLSearchParams(searchParams);
    if (hintVisible) {
      updated.delete('hint');
    } else {
      updated.set('hint', 'true');
    }
    setSearchParams(updated);
  }

  return (
    <div className="hint-container">
      <button onClick={toggle} className="hint-button">
        {hintVisible ? 'Dölj ledtråd' : 'Visa ledtråd'}
      </button>
      {hintVisible && (
        <p className="hint-text">
          <span className="hint-label">Ledtråd:</span> {hint}
        </p>
      )}
    </div>
  );
}
