import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Newtranscript from './pages/newtranscript.jsx';
import TopicSelectionMenu from './components/TopicSelectionMenu.jsx';
import Mainpage from './pages/Mainpage.jsx';
import Layout from "./pages/Layout";
import CalendarKU from './pages/Calendar.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/NisitKU" element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="/NisitKU/Newtranscript" element={<Newtranscript />} />
		      <Route path="/NisitKU/CalendarKU" element={<CalendarKU />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
