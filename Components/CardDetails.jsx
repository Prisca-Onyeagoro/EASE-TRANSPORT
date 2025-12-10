import React from "react";
import { useRouter } from "next/navigation";
import InputField from "./InputField";
import PopupModal from "./PopupModal";

const CardDetails = () => {
  const [isSuccess, setSuccess] = React.useState(false);
  const router = useRouter();

  const Paymode = () => {
    setSuccess(true);

    setTimeout(() => {
      router.push("/reciept");
    }, 3000);
  };

  return (
    <div>
      <p>Card Details</p>
      <InputField
        label="Cardholder Name"
        icon="CardSim"
        name="johnDoe"
        placeholder="Enter Your Name..."
      />
      <InputField
        label="Card Number"
        icon="CardSim"
        name="cardnumber"
        type="number"
        placeholder="4111 1111 1111 1111"
      />
      <InputField
        label="Expiry Date"
        icon="CardSim"
        name="EXP"
        placeholder="MM/YY"
      />
      <InputField label="CVV/CVC" icon="CardSim" name="CVV" placeholder="123" />

      <InputField
        label="Billing Address"
        icon="CardSim"
        name="johnDoe"
        placeholder="123 Main Street, City, Country 1248"
      />
      <div className="flex items-center text-center justify-center mt-3.5">
        <button
          onClick={Paymode}
          className="bg-purple-800 font-bold p-4 rounded-xl"
        >
          Pay Now
        </button>
      </div>
      {isSuccess && <PopupModal />}
    </div>
  );
};

export default CardDetails;
