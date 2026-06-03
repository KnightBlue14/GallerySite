import { useState } from 'react';
import './InfoTooltip.css';

function InfoTooltip({ message }) {
  const [visible, setVisible] = useState(false);

  return (
    <span className="info-icon" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      ℹ️
      {visible && <div className="tooltip">{message}</div>}
    </span>
  );
}

export default InfoTooltip;