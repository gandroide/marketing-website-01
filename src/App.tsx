import { Box } from '@material-ui/core';
import './styles.css';
import { CustomButton } from './Components/Button';
import { Title } from './Components/Title';
import { InfoSpan } from './Components/InfoSpan';
import { CardList } from './Components/CardList';
import Lottie from 'react-lottie';
import calabaza from './lottie/scary-cat.json';
import { NavBar } from './Components/NavBar';

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
    <div>
      <NavBar />
      <Title />
      <InfoSpan />
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        style={{ position: 'absolute' }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '2rem',
        }}
      >
        <CardList
          creatorProps={''}
          titleProps={''}
          categoryProps={''}
          descriptionProps={''}
          noteProps={''}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CustomButton />
      </Box>
    </div>
  );
};
