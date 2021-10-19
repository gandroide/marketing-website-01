import { FC } from 'react';
import { SingleCard } from './SingleCard';
import { CardProps } from '../interfaces';

const listOfCards = [
  {
    img: 'imagen de muestra',
    creator: 'Gandroide',
    title: 'Marketing',
    category: 'horror tech',
    description: 'description1',
    note: 'alguna nota',
  },
  {
    creator: 'Gandroide',
    title: 'Design',
    category: 'events',
    description: 'description2',
    note: 'alguna nota',
  },
  {
    creator: 'INeverLose',
    title: 'Collage',
    category: 'horror',
    description: 'description3',
    note: 'alguna nota',
  },
  {
    creator: 'Azaru',
    title: 'Movies',
    category: 'others',
    description: 'description4',
    note: 'alguna nota',
  },
];

export const CardList: FC<CardProps> = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {listOfCards.map((props, ind) => (
        <SingleCard
          key={ind}
          creatorProps={props.creator}
          titleProps={props.title}
          descriptionProps={props.description}
          categoryProps={props.category}
          noteProps={props.note}
        />
      ))}
    </div>
  );
};
