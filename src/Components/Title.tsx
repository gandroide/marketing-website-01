import { Container, Box } from '@material-ui/core';

export const Title = () => {
  return (
    <Box padding="20px">
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <h1>Title</h1>
        </Box>
      </Container>
    </Box>
  );
};
