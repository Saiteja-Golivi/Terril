import RowsPerPage from '@components/Pagination/RowsPerPage';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import Link from 'next/link';

interface IRow {
	[key: string]: any;
}

interface IColumn {
	Header: string;
	accessor: string;
}

interface ITablesProps {
	columns: any;
	data: IRow[];
}

export const Tables: React.FC<ITablesProps> = ({ columns, data }) => {

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		// setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
		},
		useGlobalFilter,
		useSortBy
	);

	// const { globalFilter } = state;

	const renderHeader = () => {
		return headerGroups.map((headerGroup: any) => (
			<tr {...headerGroup.getHeaderGroupProps()}>
				{headerGroup.headers.map((column: any) => (
					<th {...column.getHeaderProps(column.getSortByToggleProps())}>
						{column.render('Header')}
						<span>
							{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
						</span>
					</th>
				))}
			</tr>
		));
	};

	const renderBody = () => {
		return rows.map((row: any) => {
			prepareRow(row);
			return (
				<tr {...row.getRowProps()}>
					{row.cells.map((cell: any) => (
						<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
					))}
				</tr>
			);
		});
	};



	return (
		<>
			<div className="card mb-4 rounded-5 border-1 tablestyles"
				style={{ borderLeft: '1px solid #CDDADE', borderRight: '1px solid #CDDADE', borderBottom: '1px solid #CDDADE' }}>
				<div className='container-fluid' >
					<div className='d-flex justify-content-between align-items-end pb-3'>
						<div>
							<h5 className='fs-6 position-relative fw-bold font-size-16'>Recently added Residents
								<span className='bg-light rounded-circle p-3'>100</span>
							</h5>							
						</div>
						<div className='d-flex'>						
							<input type="text" className='mt-3 p-2 rounded-5 serach'placeholder="Search by name"/>
							<div className='position-relative'>
							<FontAwesomeIcon icon={faSearch} className='SearchIcon'/>
							</div>

							<Link href={"/admitResident"}>
							
							<button className='btn-rounded mt-3 p-2 serach'>
								Admit Resident
							</button>
							</Link>					
						
							<button className='btn-rounded mt-3 p-2 serach'>
								Start Facility Meeting
							</button>
						</div>
					</div>

					<div className='border-bottom'></div>

					<div>
						<table {...getTableProps()} className="table">
							<thead>{renderHeader()}</thead>
							<tbody {...getTableBodyProps()}>{renderBody()}</tbody>
						</table>

						<RowsPerPage perPage={0} />

					</div>
				</div>

			</div>
			<div className='BottomCurveDiv'>
				<div></div>
			</div>

		</>
	)
}


export default Tables;
