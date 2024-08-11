import React from 'react';

const TicketModal = () => (
  <div id="ticketModal" className="modal">
    <div className="modal-content">
      <header className="modal-header">
        <span className="close" onClick={() => document.getElementById('ticketModal').style.display = 'none'}>&times;</span>
        <h2><i className="fa fa-suitcase"></i> Tickets</h2>
      </header>
      <div className="modal-body">
        <p><label><i className="fa fa-shopping-cart"></i> Tickets, $15 per person</label></p>
        <input type="text" placeholder="How many?" className="input-field" />
        <p><label><i className="fa fa-user"></i> Send To</label></p>
        <input type="text" placeholder="Enter email" className="input-field" />
        <button className="pay-btn">PAY <i className="fa fa-check"></i></button>
        <button className="close-btn" onClick={() => document.getElementById('ticketModal').style.display = 'none'}>Close <i className="fa fa-remove"></i></button>
        <p className="help">Need <a href="/">help?</a></p>
</div>
</div>
</div>
);


export default TicketModal;