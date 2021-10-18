import { FC } from 'react';
import '../styles.css';

const BackGroundHalloween = require('../statics/halloween.jpg');
export const Home: FC = () => {
  return (
    <div
      id="fondo"
      style={{
        display: 'flex',
        backgroundImage: `url(${BackGroundHalloween})`,
        backgroundSize: 'small',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    ></div>
  );
};
