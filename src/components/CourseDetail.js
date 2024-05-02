// CourseDetails.js
import React from 'react';
import TestList from './TestList';

const CourseDetails = ({ test, onClose }) => {
  return (
    <div className="course-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ marginTop: '20px', marginBottom: '20px' }}>{test.title}</h2>
      <div className="details-content mt-4" style={{ display: 'flex', width: '100%' }}>
        <div className="details-left" style={{ flex: '1', marginRight: '20px' }}>
          <img src={test.imageUrl} alt="Test" style={{ maxWidth: '500px', maxHeight: '500px' }} />
        </div>
        <div className="details-right" style={{ flex: '1' }}>
          <TestList items={test.options} />
        </div>
      </div>
      <button onClick={onClose} style={{ marginTop: '20px' }}>Cerrar</button>
    </div>
  );
};

export default CourseDetails;
