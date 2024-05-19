import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const GroupInfo = ({ onBackButtonClick }) => {
  return (
    <div>
        <h1 style={{ cursor: "pointer", fontSize: "22px" }} onClick={onBackButtonClick} >
        <ArrowBackIcon /> Atrás
      </h1>
      <h2 className="mt-4">Docentes</h2>
      
    </div>
  );
};

export default GroupInfo;
