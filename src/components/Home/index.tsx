import { Card, CardContent, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from '../../hooks';
import Form from '../Form';
import useStyles from './styles';

const Home: React.FC = () => {
  const reverseEntries = useStoreState(state => state.guestbook.reverseEntries);
  const getEntries = useStoreActions(state => state.guestbook.getEntries);
  const classes = useStyles();

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <div>
      <Form />

      {reverseEntries.map(entry => (
        <Card key={entry.name} className={classes.entryCard}>
          <CardContent>
            <Typography variant='h6'>
              <strong>{entry.content}</strong>
            </Typography>
            <Typography variant='body1'>
              <em>author: </em>
              {entry.name}
            </Typography>
            <Typography variant='caption'>{entry.submitted}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Home;
