"use client";
import Link from "next/link";
const error = ({ error }) => {
  console.log(error.message);

  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <Link href="/">Click here to go back home</Link>
    </div>
  );
};

export default error;
