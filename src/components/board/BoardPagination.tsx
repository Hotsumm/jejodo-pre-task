import React from 'react';
import styled from 'styled-components';
import { FirstArrow, PrevArrow, NextArrow, LastArrow } from '../icons';
import Pagination from 'react-js-pagination';

type BoardPaginationProps = {
  activePage: number;
  count: number;
  itemsCountPerPage: number;
  handlePageChange: (page: number) => void;
};

function BoardPagination({
  activePage,
  itemsCountPerPage,
  handlePageChange,
  count,
}: BoardPaginationProps) {
  return (
    <Container>
      <Pagination
        onChange={handlePageChange}
        activePage={activePage}
        totalItemsCount={count}
        itemsCountPerPage={itemsCountPerPage}
        pageRangeDisplayed={itemsCountPerPage}
        firstPageText={<FirstArrow />}
        prevPageText={<PrevArrow />}
        nextPageText={<NextArrow />}
        lastPageText={<LastArrow />}
        itemClass="item"
        itemClassFirst="firstArrow"
        itemClassPrev="prevArrow"
        itemClassNext="nextArrow"
        itemClassLast="lastArrow"
      />
    </Container>
  );
}

export default BoardPagination;

const Container = styled.div`
  display: flex;
  width: 100%;
  .pagination {
    display: flex;
    margin: 44px auto 100px;
    width: fit-content;
    min-width: 200px;
    align-items: center;
    gap: 0 12px;
  }
  .item {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    svg {
      width: 24px;
      height: 24px;
    }

    &.disabled {
      opacity: 0.5;
      a {
        cursor: default;
      }
    }
    &.active {
      color: black;
    }
    &.prevArrow {
      margin-right: 13px;
    }
    &.nextArrow {
      margin-left: 13px;
    }
  }
`;
