import { Container, Box } from '@material-ui/core';

export const InfoSpan = () => {
  return (
    <>
      <Box padding="20px">
        <Container maxWidth="xs">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
          </Box>
        </Container>
      </Box>
    </>
  );
};
