import React, {
	type PropsWithChildren, useCallback, useEffect, useState,
} from 'react';
import {useResizeDetector} from 'react-resize-detector';
import Head from 'next/head';
import Sidebar, {SidebarOverlay} from '@layout/AdminLayout/Sidebar/Sidebar';
import Header from '@layout/AdminLayout/Header/Header';

export default function AdminLayout({children}: PropsWithChildren) {
	// Show status for xs screen
	const [isShowSidebar, setIsShowSidebar] = useState(false);

	// Show status for md screen and above
	const [isShowSidebarMd, setIsShowSidebarMd] = useState(true);

	const toggleIsShowSidebar = () => {
		setIsShowSidebar(!isShowSidebar);
	};

	const toggleIsShowSidebarMd = () => {
		const newValue = !isShowSidebarMd;
		localStorage.setItem('isShowSidebarMd', newValue ? 'true' : 'false');
		setIsShowSidebarMd(newValue);
	};

	// Clear and reset sidebar
	const resetIsShowSidebar = () => {
		setIsShowSidebar(false);
	};

	const onResize = useCallback(() => {
		resetIsShowSidebar();
	}, []);

	const {ref} = useResizeDetector({onResize});

	// On first time load only
	useEffect(() => {
		if (localStorage.getItem('isShowSidebarMd')) {
			setIsShowSidebarMd(localStorage.getItem('isShowSidebarMd') === 'true');
		}
	}, [setIsShowSidebarMd]);

	return (
		<>
			<Head>
				<title>Terril Dashboard</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div ref={ref} className="position-absolute w-100" />

			<Sidebar isShow={isShowSidebar} isShowMd={isShowSidebarMd} />

			<div className="wrapper d-flex flex-column min-vh-100 bodybackground ">
				<Header toggleSidebar={toggleIsShowSidebar} toggleSidebarMd={toggleIsShowSidebarMd} />
				<div className="body flex-grow-1 px-sm-4 bg-light py-4 roundedLeftBottom">
					<div className='container-fluid'>
						{children}
					</div>
				</div>
			</div>

			<SidebarOverlay isShowSidebar={isShowSidebar} toggleSidebar={toggleIsShowSidebar} />
		</>
	);
}
