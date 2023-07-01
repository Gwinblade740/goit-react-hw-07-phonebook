import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from '../redux/Operation';

import { FormComponent } from 'components/FormComponent/FormComponent';
import ListComponent from './ListComponent/ListComponent';
import Filter from 'components/Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <FormComponent></FormComponent>
      <h2>Contacts</h2>
      <Filter></Filter>

      <ListComponent></ListComponent>
    </div>
  );
};
