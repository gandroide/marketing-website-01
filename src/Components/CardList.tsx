import { FC } from 'react';
import { Feature } from './Feature';

const listOfCards = ['Marketing', 'Design', 'Collage', 'nueva Carta'];

interface CardProps {
  title: string;
}

export const CardList: FC<CardProps> = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {listOfCards.map((listOfCards, ind) => (
        <Feature key={ind} titleProps={listOfCards} />
      ))}
    </div>
  );
};
