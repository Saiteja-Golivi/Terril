/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import Summary from './Summary';
import RowsPerPage from './RowsPerPage';
import Paginate from './Paginate';

type Props = {
	setPerPage?: (perPage: number) => void;
} & Pick<Parameters<typeof Paginate>[0], 'setPage'>
& Pick<Parameters<typeof RowsPerPage>[0], 'setPerPage'>;

export default function Pagination(props: Props) {
	const {
		setPerPage,
		setPage,
	} = props;

	return (
		<div className="row align-items-center justify-content-center">
			<Summary from={from} to={to} total={total} />
			<RowsPerPage perPage={perPage} setPerPage={setPerPage} />
			<Paginate currentPage={currentPage} lastPage={lastPage} setPage={setPage} />
		</div>
	);
}
