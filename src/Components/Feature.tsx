import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Container,
} from '@material-ui/core';
import { FC } from 'react';
import { CardProps } from '../interfaces';

export const Feature: FC<CardProps> = ({
  creatorProps,
  titleProps,
  descriptionProps,
  categoryProps,
  noteProps,
}) => {
  return (
    <Container maxWidth="xs">
      <Card sx={{ minWidth: 5 }} style={{ backgroundColor: 'orange' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {creatorProps}
          </Typography>
          <Typography variant="h5" component="div">
            {titleProps}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {categoryProps}
          </Typography>
          <Typography variant="body2">
            {descriptionProps}
            <br />
            {noteProps}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
    </Container>
  );
};
