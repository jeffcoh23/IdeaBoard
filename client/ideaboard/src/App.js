import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList } from './posts';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://localhost:3001/api/v1')}>
        <Resource name="ideas" list={PostList} />
    </Admin>
);

export default App;
