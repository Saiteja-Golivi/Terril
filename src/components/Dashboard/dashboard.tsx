/* eslint-disable @typescript-eslint/ban-types */

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import React, {useMemo, useEffect, useState} from 'react';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import {Tables} from '@components/Table/Table';
import {faker} from '@faker-js/faker';
// Import faker from 'faker';
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';
import Image from 'next/image';

type ResidentData = {
	ResidentName: string;
	BlockNo: string;
	Dob: string;
	AdmissionDate: string;
	InsuranceType: string;
	Lcd: string;
	LastAssessmentDate: string;
	LastAssessmentType: string;
};

const Dashboard = (props: any) => {
	const [data, setData] = useState<ResidentData[]>([]);

	const [selectedCard, setSelectedCard] = useState<number | null>(null);

	const selectCard = (cardNumber: number) => {
		setSelectedCard(cardNumber);
	};

	// Const fakeData = useMemo(() => Array.from({length: 5}, () => ({
	// 	ResidentName: faker.name.firstName(),
	// 	BlockNo: faker.address.streetAddress(),
	// 	Dob: faker.date.past().toLocaleDateString(),
	// 	AdmissionDate: faker.date.past().toLocaleDateString(),
	// 	InsuranceType: faker.lorem.word(),
	// 	Lcd: faker.date.past().toLocaleDateString(),
	// 	LastAssessmentDate: faker.date.past().toLocaleDateString(),
	// 	LastAssessmentType: faker.lorem.word(),
	// })), []);

	useEffect(() => {
		const fakeData: ResidentData[] = Array.from({length: 50}, () => ({
			ResidentName: faker.name.firstName(),
			BlockNo: faker.name.jobTitle(),
			Dob: faker.date.past().toLocaleDateString(),
			AdmissionDate: faker.date.past().toLocaleDateString(),
			InsuranceType: faker.lorem.word(),
			Lcd: faker.date.past().toLocaleDateString(),
			LastAssessmentDate: faker.date.past().toLocaleDateString(),
			LastAssessmentType: faker.lorem.word(),
		}));

		setData(fakeData);
	}, []);

	const columns = useMemo(
		() => [
			{Header: 'Resident Name', accessor: 'ResidentName'},
			{Header: 'Block No', accessor: 'BlockNo'},
			{Header: 'Date of Birth', accessor: 'Dob'},
			{Header: 'Admission Date', accessor: 'AdmissionDate'},
			{Header: 'Insurance Type', accessor: 'InsuranceType'},
			{Header: 'LCD', accessor: 'Lcd'},
			{Header: 'Last Assessment Date', accessor: 'LastAssessmentDate'},
			{Header: 'Last Assessment Type', accessor: 'LastAssessmentType'},
			{
				Header: 'Action',
				accessor: 'Action',
				style: {overflow: 'visible'},
				Cell() {
					return (
						<OverlayTrigger
							trigger="click"
							placement="bottom"
							overlay={popover}
						>
							<Button variant="white">
								<FontAwesomeIcon icon={faEllipsisV} size="2x" />
							</Button>
						</OverlayTrigger>
					);
				},
			},
		],
		[],
	);

	const popover = (
		<Popover id="popper-basic" className="bg-light">
			<Popover.Body>
				<div className="col ">
					<div className="row-3 py-2">Do Assessment</div>
					<div className="row-3 py-2">Deactivate Resident</div>
					<div className="row-3 py-2">Update Resident</div>
					<div className="row-3 py-2">View Resident</div>
				</div>
			</Popover.Body>
		</Popover>
	);

	//   UseEffect(() => {
	//     // Generate fake data
	//     const fakeData = Array.from({ length: 5 }, () => ({
	//       //   name: faker.name.findName(),
	//       email: faker.internet.email(),
	//       //   phone: faker.phone.phoneNumber(),
	//       location: faker.location.streetAddress(),
	//     }));

	//     // Log the FakeData to the console
	//     console.log("faker-->", fakeData);
	//     setData(fakeData);
	//   }, []);

	// const data = useMemo(
	// 	() => [
	// 		{
	// 			ResidentName: 'Sohail Patil',
	// 			BlockNo: 'Business Admin',
	// 			Dob: '19/01/1968',
	// 			AdmissionDate: '01/11/2022',
	// 			InsuranceType: 'Mediacre A',
	// 			Lcd: '09/11/1997',
	// 			LastAssessmentDate: '09/11/1997',
	// 			LastAssessmentType: '5 Days',
	// 			NextAssessmentDate: '09/11/1997',
	// 			NextAssessmentType: '5 Days',
	// 		},

	// 		{
	// 			ResidentName: 'Sohail Patil',
	// 			BlockNo: 'Business Admin',
	// 			Dob: '19/01/1968',
	// 			AdmissionDate: '01/11/2022',
	// 			InsuranceType: 'Mediacre A',
	// 			Lcd: '09/11/1997',
	// 			LastAssessmentDate: '09/11/1997',
	// 			LastAssessmentType: '5 Days',
	// 			NextAssessmentDate: '09/11/1997',
	// 			NextAssessmentType: '5 Days',
	// 		},

	// 		{
	// 			ResidentName: 'Sohail Patil',
	// 			BlockNo: 'Business Admin',
	// 			Dob: '19/01/1968',
	// 			AdmissionDate: '01/11/2022',
	// 			InsuranceType: 'Mediacre A',
	// 			Lcd: '09/11/1997',
	// 			LastAssessmentDate: '09/11/1997',
	// 			LastAssessmentType: '5 Days',
	// 			NextAssessmentDate: '09/11/1997',
	// 			NextAssessmentType: '5 Days',
	// 		},

	// 		{
	// 			ResidentName: 'Sohail Patil',
	// 			BlockNo: 'Business Admin',
	// 			Dob: '19/01/1968',
	// 			AdmissionDate: '01/11/2022',
	// 			InsuranceType: 'Mediacre A',
	// 			Lcd: '09/11/1997',
	// 			LastAssessmentDate: '09/11/1997',
	// 			LastAssessmentType: '5 Days',
	// 			NextAssessmentDate: '09/11/1997',
	// 			NextAssessmentType: '5 Days',
	// 		},

	// 		{
	// 			ResidentName: 'Sohail Patil',
	// 			BlockNo: 'Business Admin',
	// 			Dob: '19/01/1968',
	// 			AdmissionDate: '01/11/2022',
	// 			InsuranceType: 'Mediacre A',
	// 			Lcd: '09/11/1997',
	// 			LastAssessmentDate: '09/11/1997',
	// 			LastAssessmentType: '5 Days',
	// 			NextAssessmentDate: '09/11/1997',
	// 			NextAssessmentType: '5 Days',
	// 		},

	// 		{
	// 			ResidentName: 'Sohail Patil',
	// 			BlockNo: 'Business Admin',
	// 			Dob: '19/01/1968',
	// 			AdmissionDate: '01/11/2022',
	// 			InsuranceType: 'Mediacre A',
	// 			Lcd: '09/11/1997',
	// 			LastAssessmentDate: '09/11/1997',
	// 			LastAssessmentType: '5 Days',
	// 			NextAssessmentDate: '09/11/1997',
	// 			NextAssessmentType: '5 Days',
	// 		},

	// 		{
	// 			ResidentName: 'Sohail Patil',
	// 			BlockNo: 'Business Admin',
	// 			Dob: '19/01/1968',
	// 			AdmissionDate: '01/11/2022',
	// 			InsuranceType: 'Mediacre A',
	// 			Lcd: '09/11/1997',
	// 			LastAssessmentDate: '09/11/1997',
	// 			LastAssessmentType: '5 Days',
	// 			NextAssessmentDate: '09/11/1997',
	// 			NextAssessmentType: '5 Days',
	// 		},

	// 		{
	// 			ResidentName: 'Sohail Patil',
	// 			BlockNo: 'Business Admin',
	// 			Dob: '19/01/1968',
	// 			AdmissionDate: '01/11/2022',
	// 			InsuranceType: 'Mediacre A',
	// 			Lcd: '09/11/1997',
	// 			LastAssessmentDate: '09/11/1997',
	// 			LastAssessmentType: '5 Days',
	// 			NextAssessmentDate: '09/11/1997',
	// 			NextAssessmentType: '5 Days',
	// 		}, // { ResidentName: "Sohail Patil", BlockNo: 'Business Admin', Dob: '19/01/1968', AdmissionDate: "01/11/2022", InsuranceType: "Mediacre A", Lcd: "09/11/1997", LastAssessmentDate: "09/11/1997", LastAssessmentType: "5 Days", NextAssessmentDate: "09/11/1997", NextAssessmentType: "5 Days", Action:".." }, // { ResidentName: "Sohail Patil", BlockNo: 'Business Admin', Dob: '19/01/1968', AdmissionDate: "01/11/2022", InsuranceType: "Mediacre A", Lcd: "09/11/1997", LastAssessmentDate: "09/11/1997", LastAssessmentType: "5 Days", NextAssessmentDate: "09/11/1997", NextAssessmentType: "5 Days", Action:".." }, // Add more data here
	// 	],

	// 	[],
	// );

	return (
		<>
			<div className="row">
				<div className="col-sm-6 col-lg-4">
					<div className="card CustomCard">
						<div className="cards-title d-flex justify-content-between align-items-end">
							<text>5 Days Plan</text>
							<Image
								src={'/Icons/Plan_IC.png'}
								alt={''}
								width={44}
								height={44}
							/>
						</div>
						<div className="card-body border-top p-0">
							<div className="row text-center">
								<div
									className={`col py-3 border-end ${
										selectedCard === 1 ? 'active' : ''
									}`}
									onClick={() => {
										selectCard(1);
									}}
								>
									<div className="card-content">
										<div className="cards-num">10</div>
										<div className="cards-info">Not Started</div>
									</div>
								</div>
								<div
									className={`col py-3 border-end ${
										selectedCard === 2 ? 'active' : ''
									}`}
									onClick={() => {
										selectCard(2);
									}}
								>
									<div className="card-content">
										{' '}
										<div className="cards-num">20</div>
										<div className="cards-info">Incomplete</div>
									</div>
								</div>
								<div
									className={`col py-3 ${selectedCard === 3 ? 'active' : ''}`}
									onClick={() => {
										selectCard(3);
									}}
								>
									<div className="card-content">
										<div className="cards-num">20</div>
										<div className="cards-info">Overdue 14 days</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-sm-6 col-lg-4">
					<div className="card  CustomCard">
						<div className="cards-title d-flex justify-content-between align-items-end">
							<text>IPA</text>
							<Image
								src={'/Icons/IPA_IC.png'}
								alt={''}
								width={44}
								height={44}
							/>
						</div>
						<div className="card-body border-top p-0">
							<div className="row text-center">
								<div className={`col py-3 ${
									selectedCard === 4 ? 'active' : ''
								}`}
								onClick={() => {
									selectCard(4);
								}}>
									<div className="card-content">
										{' '}
										<div className="cards-num">10</div>
										<div className=" cards-info">In Progress</div>
									</div>
								</div>
								{/* <div className="vr p-0" /> */}
								<div className={`col py-3 border-end ${
									selectedCard === 5 ? 'active' : ''
								}`}
								onClick={() => {
									selectCard(5);
								}}>
									<div className="card-content">
										<div className="cards-num">20</div>
										<div className=" cards-info">Overdue 14 days</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-lg-4">
					<div className="card  CustomCard">
						<div className="cards-title d-flex justify-content-between align-items-end">
							<text>Lcd </text>
							<Image
								src={'/Icons/LCD_IC.png'}
								alt={''}
								width={44}
								height={44}
							/>
						</div>
						<div className="card-body border-top p-0">
							<div className="row text-center">
								<div className={`col py-3 border-end ${
									selectedCard === 6 ? 'active' : ''
								}`}
								onClick={() => {
									selectCard(6);
								}}>
									<div className="card-content">
										<div className="cards-num">10</div>
										<div className=" cards-info">Last 7 days</div>
									</div>
								</div>
								{/* <div className="vr p-0" /> */}
								<div className={`col py-3 ${
									selectedCard === 7 ? 'active' : ''
								}`}
								onClick={() => {
									selectCard(7);
								}}>
									<div className="card-content">
										{' '}
										<div className="cards-num">20</div>
										<div className="cards-info">Next 7 days</div>
                    
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Tables columns={columns} data={data} />
		</>
	);
};

export default Dashboard;
