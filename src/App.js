import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

import { ChannelDetail, VideoDetail, MainFeed, Navbar, SearchFeed } from './components';

const App = ()=>(
    <BrowserRouter>
        <Box sx={{backgroundColor: "#000"}}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<MainFeed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App;