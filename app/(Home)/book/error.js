"use client";
import React from "react";

const error = ({ error }) => {
  return (
    <div>
      <p>Somethinh went wrong</p>
      <h1>{error.message}</h1>
    </div>
  );
};

export default error;
