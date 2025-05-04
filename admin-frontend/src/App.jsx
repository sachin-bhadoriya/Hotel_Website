import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import EditNoteService from './components/ServiceNote/EditServiceContent';
import ReadNoteService from './components/ServiceNote/ReadServiceContent';
import NoteViewService from './Pages/ServiceContentView';
import Navbar from './components/ServiceNote/Navbar';
import ServiceFolder from './Pages/ServiceFolder';
import AboutFolder from './Pages/AboutFolder';
import EditNoteAbout from './components/AboutNote/EditAboutContent';
import ReadNoteAbout from './components/AboutNote/ReadAboutContent';
import NoteViewAbout from './Pages/AboutContentView';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* for service content */}
        <Route path="/editservicecontents/:id" element={<EditNoteService />} />
        <Route path="/servicecontents/:id" element={<ReadNoteService />} />
        <Route path="/all-servicecontents" element={<NoteViewService />} />
        <Route path="/service" element={<ServiceFolder />} />

        {/* for about content */}
        <Route path="/editaboutcontents/:id" element={<EditNoteAbout />} />
        <Route path="/aboutcontents/:id" element={<ReadNoteAbout />} />
        <Route path="/all-servicecontents" element={<NoteViewAbout />} />
        <Route path="/about" element={<AboutFolder />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
