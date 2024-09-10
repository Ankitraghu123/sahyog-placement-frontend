import { configureStore } from '@reduxjs/toolkit';
import candidateReducer from '../features/candidate/candidateSlice';
import companyReducer from '../features/company/companySlice';
import jobReducer from '../features/job/jobSlice';
import contactReducer from '../features/contact/contactSlice';


export const store = configureStore({
  reducer: {
   candidate:candidateReducer,
   company:companyReducer,
   job:jobReducer,
   contact:contactReducer
  }
});
