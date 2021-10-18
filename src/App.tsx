import { Box } from '@material-ui/core';
import './styles.css';
import { CustomButton } from './Components/Button';
import { Title } from './Components/Title';
import { InfoSpan } from './Components/InfoSpan';
import { CardList } from './Components/CardList';
import Lottie from 'react-lottie';
import calabaza from './lottie/scary-cat.json';
import { Home } from './Components/Home';

export const App = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: calabaza,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <Home />
      <Title />
      <InfoSpan />
      <Lottie options={defaultOptions} height={400} width={400} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '2rem',
        }}
      >
        <CardList title="primera carta" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CustomButton />
      </Box>
    </>
  );
};
