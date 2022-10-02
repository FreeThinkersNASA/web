import axios from 'axios';
import type { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

// import { WorldWind as Globe } from '../components/worldwind';
import { Globe } from '../components/globe';
import { Panel } from '../components/panel';

const Home: NextPage = () => {
    // const [searchValue, setSearchValue] = useState('');

    // const onChangeSearch = useCallback((e) => {
    //     setSearchValue(e.target.value);
    // }, []);

    // const query = useQuery('weather', async () => {
    //     const { data } = await axios.get(
    //         'https://api.openweathermap.org/data/2.5/weather',
    //         {
    //             params: {
    //                 lat: 52.7,
    //                 lon: 42.0,
    //                 appid: 'c24c3d671ee1c125a99c6fbe56fedec5',
    //             },
    //         },
    //     );

    //     return data;
    // });

    // if (query.isFetched) {
    //     return <>{JSON.stringify(query.data)}</>;
    // }

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
