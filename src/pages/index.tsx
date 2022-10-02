import { type NextPage } from 'next';

import { Globe } from '../components/globe';
import { Panel } from '../components/panel';

const Home: NextPage = () => {
    return (
        <div
            style={{
                display: 'grid',
                height: '100%',
                gridTemplateRows: '30px auto',
            }}
        >
            <Panel />
            <Globe />
        </div>
    );
};

export default Home;
