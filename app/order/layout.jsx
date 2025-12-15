import PaymentModalWrapper from "../../Components/Payment";
import { Suspense } from "react";

const Layout = ({ children, payment, summary }) => {
  return (
    <>
      <div>{children}</div>

      <div className="md:flex justify-around items-center">
        <Suspense fallback={null}>
          {" "}
          {/* or <div>Loading...</div> if you want */}
          <PaymentModalWrapper payment={payment} />
        </Suspense>

        <div>{summary}</div>
      </div>
    </>
  );
};

export default Layout;
