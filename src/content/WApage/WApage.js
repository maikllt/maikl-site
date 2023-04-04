import React from 'react';

const WApage = () => {
  return (
    <div className="whatsapp-trimmer">
      <iframe id="whatsapp-trimmer" title="WhatsApp trimmer" src={process.env.REACT_APP_WA_TRIMMER_URL} />
    </div> 
  );
}

export default WApage;