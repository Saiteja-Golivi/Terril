import type {NextPage} from 'next';
import {AdminLayout} from '@layout';
import React from 'react';
import Dashboard from '@components/Dashboard/dashboard';


const Home: NextPage = () => (
	<AdminLayout>
		<Dashboard/>
	</AdminLayout>
);

export default Home;
