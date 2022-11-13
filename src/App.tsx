import { Routes, Route } from 'react-router-dom';
import JobBoard from './pages/JobBoard/JobBoard';
import JobDetailed from './pages/JobDetailed/JobDetailed';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Layout from './components/Layout';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<JobBoard />}/>
        <Route path="jobs/:id" element={<JobDetailed />}/>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
);
}

export default App;
