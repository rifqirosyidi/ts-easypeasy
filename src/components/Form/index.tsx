import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { useForm } from 'react-hook-form';
import useStyles from './styles';
import GuestBookEntry from '../../interfaces/GuestBookEntry';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useStoreActions } from '../../hooks/index';

const FormSchema = yup.object().shape({
  name: yup.string().trim().required(),
  content: yup.string().trim().min(10).max(200).required(),
});

const Form: React.FC = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const addEntry = useStoreActions(actions => actions.guestbook.addEntry);
  const onSubmit = (data: GuestBookEntry): void => {
    addEntry(data);
  };

  return (
    <div className={classes.formContainer}>
      <h2>Entry Form: </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          inputRef={register}
          label='Name'
          name='name'
          fullWidth
          variant='outlined'
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ''}
        ></TextField>
        <TextField
          inputRef={register}
          multiline
          rows={3}
          label='Content'
          name='content'
          fullWidth
          variant='outlined'
          error={!!errors.content}
          helperText={errors.content ? errors.content.message : ''}
        ></TextField>
        <Box display='flex' justifyContent='flex-end'>
          <Button type='submit' variant='contained' color='primary'>
            Add Entry
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Form;
