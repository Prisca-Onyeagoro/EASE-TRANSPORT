"use client"
import React from "react";
import { useEffect } from "react";

const RecieptPage =  () => {
  const [details, setDetails] = React.useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("details");
    if (saved) {
      try {
        setDetails(JSON.parse(saved));
      } catch (error) {
        console.error("Failed to parse details from localStorage");
      }
    }
  }, []);

  if (!details) {
    return (
      <div className="bg-gray-800 rounded-xl p-10 text-center text-gray-400">
        <p className="text-xl">No booking details yet</p>
        <p className="text-sm mt-2">Fill the form → summary appears here</p>
      </div>
    );
  }
  return (
    <div>
      <div className="p-9">
        <div className="bg-gray-800 rounded-xl p-8 text-white shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">
            Your Ride Summary
          </h2>

          <div className="space-y-5 text-lg">
            <p>
              <strong>Name:</strong> {details.fullName || "—"}
            </p>
            <p>
              <strong>Phone:</strong> {details.phone || "—"}
            </p>
            <p>
              <strong>From:</strong> {details.currentLocation || "—"}
            </p>
            <p>
              <strong>To:</strong> {details.destination || "—"}
            </p>
            {details.gender && (
              <p>
                <strong>Gender:</strong> {details.gender}
              </p>
            )}
            {details.notes && (
              <p>
                <strong>Notes:</strong> {details.notes}
              </p>
            )}

            <div className="mt-10 pt-6 border-t border-gray-700">
              <p className="text-3xl font-bold text-purple-400">₦4,500</p>
              <p className="text-sm text-gray-400 mt-2">Estimated fare</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecieptPage;
