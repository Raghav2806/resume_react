import React, { useState } from 'react';
import MyForm from './components/Form';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('form');
  const [formInput, setFormInput] = useState({});

  const handleNextPage = () => {
    setCurrentPage('Resume');
  };

  const handleFormInput = (data) => {
    setFormInput(data);
    handleNextPage();
  };

    return (
        <div>
        {currentPage === 'form' && (
        <MyForm onNextPage={handleFormInput} />
      )}
      {currentPage === 'Resume' && <Resume formInput={formInput} />}
        </div>
      );
}

export default App;