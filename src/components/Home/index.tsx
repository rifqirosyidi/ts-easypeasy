import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { useStoreState } from '../../hooks';

const Home: React.FC = () => {
  const entries = useStoreState(state => state.guestbook.entries);

  return (
    <div>
      {entries.map(entry => (
        <Card key={entry.name}>
          <CardContent>
            <Typography variant='h6'>
              <strong>{entry.content}</strong>
            </Typography>
            <Typography variant='body1'>
              <em>author: </em>
              {entry.name}
            </Typography>
            <Typography variant='caption'>{entry.submitted.toDateString()}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Home;
