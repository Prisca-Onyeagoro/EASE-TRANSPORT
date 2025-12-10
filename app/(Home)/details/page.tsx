import { Metadata } from "next";
import Details from "@/Components/Details";
import Manual from "@/Components/Manual";
import Reason from "@/Components/Reason";
import BookNow from "@/Components/BookNow";

export const metadata: Metadata = {
  title: "journey-details",
  description: "view details of your journey",
};

const details = () => {
  return (
    <div>
      <Details />
      <Manual />
      <Reason />
      <BookNow />
    </div>
  );
};

export default details;
