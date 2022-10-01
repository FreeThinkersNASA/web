import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import type { NextPage } from 'next';

// import { WorldWind as Globe } from '../components/worldwind';
import { Globe } from '../components/globe';

const Home: NextPage = () => {
    return (
        <div
            style={{
                display: 'grid',
                height: '100%',
                gridTemplateRows: '48px auto',
            }}
        >
            <AppBar position='relative'>
                <Toolbar variant='dense'>
                    <Typography variant='h6' color='inherit' component='div'>
                        Earth Weather
                    </Typography>
                </Toolbar>
            </AppBar>

            <Globe />
        </div>
    );
};

export default Home;
