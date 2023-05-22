import { Form } from 'react-bootstrap'
import React from 'react'
import { useRouter } from 'next/router'
import PaginationCount from './PaginationCount';

type Props = {
  perPage: number;
  setPerPage?: (perPage: number) => void;
}

export default function RowsPerPage(props: Props) {
  const { perPage, setPerPage } = props
  const router = useRouter()

  return (
    <div className="d-flex justify-content-end align-items-baseline">
      {/* Rows per page: */}
      {' '}
      <Form.Select
        defaultValue={perPage}
        className="d-inline-block w-auto rounded-5 m-1"
        aria-label="Item per page"
        onChange={(event) => {
          if (setPerPage) {
            setPerPage(parseInt(event.target.value, 10))
          }

          router.push({
            pathname: router.pathname,
            query: {
              ...router.query,
              page: 1, // Go back to first page
              per_page: event.target.value,
            },
          })
        }}
      >
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
        <option value={250}>250</option>
      </Form.Select>
      <PaginationCount />
    </div>
    
  )
  
}

