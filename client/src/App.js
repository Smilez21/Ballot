import React, { useState } from 'react';
import CategoryList from './components/CategoryList';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const categories = [
    {
      id: 'category1',
      name: 'Category 1',
      nominees: [
        { id: 'nominee1', name: 'Nominee 1', image: 'nominee1.jpg' },
        { id: 'nominee2', name: 'Nominee 2', image: 'nominee2.jpg' },
        { id: 'nominee3', name: 'Nominee 3', image: 'nominee3.jpg' },
        { id: 'nominee4', name: 'Nominee 4', image: 'nominee4.jpg' },
        { id: 'nominee5', name: 'Nominee 5', image: 'nominee5.jpg' },
      ],
    },
    {
      id: 'category2',
      name: 'Category 2',
      nominees: [
        { id: 'nominee6', name: 'Nominee 6', image: 'nominee6.jpg' },
        { id: 'nominee7', name: 'Nominee 7', image: 'nominee7.jpg' },
        { id: 'nominee8', name: 'Nominee 8', image: 'nominee8.jpg' },
        { id: 'nominee9', name: 'Nominee 9', image: 'nominee9.jpg' },
        { id: 'nominee10', name: 'Nominee 10', image: 'nominee10.jpg' },
      ],
    },
  ];

  const [selections, setSelections] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleSelection = (categoryId, nomineeId) => {
    setSelections(prevSelections => ({
      ...prevSelections,
      [categoryId]: nomineeId,
    }));
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <CategoryList
        categories={categories}
        selections={selections}
        handleSelection={handleSelection}
      />

      <button class="button" onClick={handleSubmit}>Submit Ballot<br/>Button</button>

      {showModal && (
        <Modal selections={selections} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
