import React from "react";
import Pagination from "pagination-component";
import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2px",
};
const itemStyle = {
  color: "black",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "700",
  width: "10px",
  textAlign: "center",
};
const Paginator = ({ handleFetchUser, initialPage, setInitialPage }) => {
  const handlePageChange = (newPageNr) => {
    setInitialPage(newPageNr);
    handleFetchUser(newPageNr);
  };
  return (
    <div style={containerStyle}>
      <Pagination
        initialPage={initialPage}
        show={2}
        pageCount={2}
        onChange={handlePageChange}
      >
        {({
          setPage,
          page,
          index,
          currentPage,
          isPrev,
          isNext,
          isCurrentPage,
        }) => {
          if (isPrev)
            return (
              <div
                style={{ itemStyle, display: "none" }}
                onClick={() => setPage({ prev: true })}
              ></div>
            );

          if (isNext)
            return (
              <div
                style={{ itemStyle, display: "none" }}
                onClick={() => setPage({ next: true })}
              ></div>
            );

          return (
            <div
              key={index}
              style={{
                ...itemStyle,
                borderBottom: isCurrentPage
                  ? "2px solid black"
                  : "2px solid white",
              }}
              onClick={() => {
                setPage({ page });
              }}
            >
              {page}
            </div>
          );
        }}
      </Pagination>
    </div>
  );
};
export default Paginator;
