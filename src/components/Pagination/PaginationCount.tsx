import { Form } from 'react-bootstrap'
import React from 'react'
import { useRouter } from 'next/router'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

type Props = {
  perPage: number;
  setPerPage?: (perPage: number) => void;
}

export default function PaginationCount() {
 

  return (
    <Pagination aria-label="Page navigation example">
  <PaginationItem disabled>
    <PaginationLink
      first
      href="#"
    />
  </PaginationItem>
  <PaginationItem disabled>
    <PaginationLink
      href="#"
      previous
    />
  </PaginationItem>
  <PaginationItem active>
    <PaginationLink href="#">
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem disabled>
    <PaginationLink href="#">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      4
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      5
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      next
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      last
    />
  </PaginationItem>
</Pagination>
    
  )
}
