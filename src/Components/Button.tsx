import { Button, Container, Box } from '@material-ui/core';
import React, { useState } from 'react';

export const CustomButton = () => {
  const [display, setDisplay] = useState(true);
  const visible = ['visible', 'invisible'];
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Container>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setDisplay(!display)}
        >
          Click
        </Button>
      </Container>
      <h1>{display ? visible[0] : visible[1]}</h1>
    </Box>
  );
};
