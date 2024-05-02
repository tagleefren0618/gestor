import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const GroupInfo = ({ onBackButtonClick }) => {
  return (
    <div>
        <h2>
        <ArrowBackIcon onClick={onBackButtonClick} /> Atrás
      </h2>
      <h2>Docente</h2>
      
    </div>
  );
};

export default GroupInfo;
