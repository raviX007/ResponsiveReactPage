import React, { useState } from 'react';

function Menu() {
  const [selectedItem, setSelectedItem] = useState('Shared event types');

  return (
    <>
      <nav className="bg-white">
        <div className="container mx-auto ml-4 py-1">
          <a
            href="#shared-event-types"
            className={`text-black text-sm ${selectedItem === 'Shared event types' ? 'font-bold' : ''}`}
            onClick={() => setSelectedItem('Shared event types')}
          >
            Shared event types
          </a>
        </div>
      </nav>
      <br />
      <nav className="bg-white">
        <div className="container mx-auto ml-4 py-1">
          <a
            href="#single-sign-on"
            className={`text-black text-sm ${selectedItem === 'Single sign-on' ? 'font-bold' : ''}`}
            onClick={() => setSelectedItem('Single sign-on')}
          >
            Single sign-on
          </a>
        </div>
      </nav>
      <br />
      <nav className="bg-white">
        <div className="container mx-auto ml-4 py-1">
          <a
            href="#workflows"
            className={`text-black text-sm ${selectedItem === 'Workflows' ? 'font-bold' : ''}`}
            onClick={() => setSelectedItem('Workflows')}
          >
            Workflows
          </a>
        </div>
      </nav>
      <br />
      <nav className="bg-white">
        <div className="container mx-auto ml-4 py-1">
          <a
            href="#data-deletion"
            className={`text-black text-sm ${selectedItem === 'Data Deletion' ? 'font-bold' : ''}`}
            onClick={() => setSelectedItem('Data Deletion')}
          >
            Data Deletion
          </a>
        </div>
      </nav>
    </>
  );
}

export default Menu;
