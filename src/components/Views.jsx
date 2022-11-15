import React from "react";

const Views = ({cityId, id}) => {
  return (
    <>
      <button className={`btn btn-light ID=${id}`} onClick={cityId}>
        <i className={`bi bi-eye ID=${id}`}></i>
      </button>
    </>
  );
};

export default Views;
