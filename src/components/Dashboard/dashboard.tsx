import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	faStethoscope,
	faHandsHoldingCircle,
	faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import React, {useMemo, useEffect, useState} from 'react';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import {Tables} from '@components/Table/Table';
import {faker} from '@faker-js/faker';
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';
import Image from 'next/image';

const Dashboard = (props: any) => {
//   Let [data, setData] = useState<{ email: string; location: string }[]>([]);

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

	const columns = useMemo(
		() => [
			{Header: 'Resident Name', accessor: 'ResidentName'},
			{Header: 'BlockNo. & RoomNo.', accessor: 'BlockNo'},
			{Header: 'DOB', accessor: 'DOB'},
			{Header: 'Admission Date', accessor: 'AdmissionDate'},
			{Header: 'Insurance Type', accessor: 'InsuranceType'},
			{Header: 'LCD', accessor: 'LCD'},
			{
				Header: 'LastAssessment',
				columns: [
					{Header: 'Date', accessor: 'LastAssessmentDate'},
					{Header: 'Type', accessor: 'LastAssessmentType'},
				],
			},
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
								<FontAwesomeIcon icon={faEllipsisV} size="2x" color="#b67be8" />
							</Button>
						</OverlayTrigger>
					);
				},
			},
		],
		[],
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

	const data = useMemo(
		() => [
			{
				ResidentName: 'Sohail Patil',
				BlockNo: 'Business Admin',
				DOB: '19/01/1968',
				AdmissionDate: '01/11/2022',
				InsuranceType: 'Mediacre A',
				LCD: '09/11/1997',
				LastAssessmentDate: '09/11/1997',
				LastAssessmentType: '5 Days',
				NextAssessmentDate: '09/11/1997',
				NextAssessmentType: '5 Days',
			},

			{
				ResidentName: 'Sohail Patil',
				BlockNo: 'Business Admin',
				DOB: '19/01/1968',
				AdmissionDate: '01/11/2022',
				InsuranceType: 'Mediacre A',
				LCD: '09/11/1997',
				LastAssessmentDate: '09/11/1997',
				LastAssessmentType: '5 Days',
				NextAssessmentDate: '09/11/1997',
				NextAssessmentType: '5 Days',
			},

			{
				ResidentName: 'Sohail Patil',
				BlockNo: 'Business Admin',
				DOB: '19/01/1968',
				AdmissionDate: '01/11/2022',
				InsuranceType: 'Mediacre A',
				LCD: '09/11/1997',
				LastAssessmentDate: '09/11/1997',
				LastAssessmentType: '5 Days',
				NextAssessmentDate: '09/11/1997',
				NextAssessmentType: '5 Days',
			},

			{
				ResidentName: 'Sohail Patil',
				BlockNo: 'Business Admin',
				DOB: '19/01/1968',
				AdmissionDate: '01/11/2022',
				InsuranceType: 'Mediacre A',
				LCD: '09/11/1997',
				LastAssessmentDate: '09/11/1997',
				LastAssessmentType: '5 Days',
				NextAssessmentDate: '09/11/1997',
				NextAssessmentType: '5 Days',
			},

			{
				ResidentName: 'Sohail Patil',
				BlockNo: 'Business Admin',
				DOB: '19/01/1968',
				AdmissionDate: '01/11/2022',
				InsuranceType: 'Mediacre A',
				LCD: '09/11/1997',
				LastAssessmentDate: '09/11/1997',
				LastAssessmentType: '5 Days',
				NextAssessmentDate: '09/11/1997',
				NextAssessmentType: '5 Days',
			},

			{
				ResidentName: 'Sohail Patil',
				BlockNo: 'Business Admin',
				DOB: '19/01/1968',
				AdmissionDate: '01/11/2022',
				InsuranceType: 'Mediacre A',
				LCD: '09/11/1997',
				LastAssessmentDate: '09/11/1997',
				LastAssessmentType: '5 Days',
				NextAssessmentDate: '09/11/1997',
				NextAssessmentType: '5 Days',
			},

			{
				ResidentName: 'Sohail Patil',
				BlockNo: 'Business Admin',
				DOB: '19/01/1968',
				AdmissionDate: '01/11/2022',
				InsuranceType: 'Mediacre A',
				LCD: '09/11/1997',
				LastAssessmentDate: '09/11/1997',
				LastAssessmentType: '5 Days',
				NextAssessmentDate: '09/11/1997',
				NextAssessmentType: '5 Days',
			},

			{
				ResidentName: 'Sohail Patil',
				BlockNo: 'Business Admin',
				DOB: '19/01/1968',
				AdmissionDate: '01/11/2022',
				InsuranceType: 'Mediacre A',
				LCD: '09/11/1997',
				LastAssessmentDate: '09/11/1997',
				LastAssessmentType: '5 Days',
				NextAssessmentDate: '09/11/1997',
				NextAssessmentType: '5 Days',
			}, // { ResidentName: "Sohail Patil", BlockNo: 'Business Admin', DOB: '19/01/1968', AdmissionDate: "01/11/2022", InsuranceType: "Mediacre A", LCD: "09/11/1997", LastAssessmentDate: "09/11/1997", LastAssessmentType: "5 Days", NextAssessmentDate: "09/11/1997", NextAssessmentType: "5 Days", Action:".." }, // { ResidentName: "Sohail Patil", BlockNo: 'Business Admin', DOB: '19/01/1968', AdmissionDate: "01/11/2022", InsuranceType: "Mediacre A", LCD: "09/11/1997", LastAssessmentDate: "09/11/1997", LastAssessmentType: "5 Days", NextAssessmentDate: "09/11/1997", NextAssessmentType: "5 Days", Action:".." }, // Add more data here
		],

		[],
	);

	return (
		<>
			<div className="row">
				<div className="col-sm-6 col-lg-4">
					<div className="card CustomCard">
						<div className="cards-title d-flex justify-content-between align-items-end">
							<text>5 Days Plan</text>
							<Image src={'/Icons/Plan_IC.png'}  alt={''} width={44} height={44}/>
						</div>
						<div className="card-body border-top borderColor p-0">
							<div className="row text-center">
								<div className="col py-3 border-end borderColor">
									<div className="cards-num">10</div>
									<div className="cards-info">
                    Not Started
									</div>
								</div>
								<div className="vr p-0" />
								<div className="col py-3 border-end borderColor">
									<div className="cards-num">20</div>
									<div className="cards-info">
                    Incomplete
									</div>
								</div>
								<div className="vr p-0" />
								<div className="col py-3">
									<div className="cards-num">20</div>
									<div className="cards-info">
                    Overdue 14 days
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
							<Image src={'/Icons/IPA_IC.png'}  alt={''} width={44} height={44}/>
						</div>
						<div className="card-body border-top borderColor p-0">
							<div className="row text-center">
								<div className="col py-3 border-end borderColor">
									<div className="cards-num">10</div>
									<div className=" cards-info">In Progress</div>
								</div>
								{/* <div className="vr p-0" /> */}
								<div className="col py-3">
									<div className="cards-num">20</div>
									<div className=" cards-info">
                    Overdue 14 days
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-lg-4">
					<div className="card  CustomCard">
						<div className="cards-title d-flex justify-content-between align-items-end">
							<text>LCD </text>
							<Image src={'/Icons/LCD_IC.png'}  alt={''} width={44} height={44}/>

						</div>
						<div className="card-body border-top borderColor p-0">
							<div className="row text-center">
								<div className="col py-3 border-end borderColor">
									<div className="cards-num">10</div>
									<div className=" cards-info">Last 7 days</div>
								</div>
								{/* <div className="vr p-0" /> */}
								<div className="col py-3">
									<div className="cards-num">20</div>
									<div className="text-uppercase cards-info">
                    Next 7 days
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
