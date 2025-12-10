"use server";
import { Postdetails } from "@/lib/database";
export default async function serverForm(prevState, formData) {
  const currentLocation = formData.get("currentLocation");
  const destination = formData.get("destination");
  const phone = formData.get("phone");
  const fullName = formData.get("fullName");
  const gender = formData.get("gender");
  console.log(destination, currentLocation, phone, fullName, gender);

  if (!currentLocation || !destination || !phone || !fullName) {
    return { message: "All required fields must be filled." };
  }

  const phoneRegex = /^\+?\d{7,15}$/;
  if (!phoneRegex.test(phone)) {
    return {
      message: "Please enter a valid phone number (e.g., +2348012345678)",
    };
  }

  if (!/^[A-Za-z]{2,}(?: [A-Za-z]{2,})+$/.test(fullName)) {
    return { message: "Please enter your full name (first and last)." };
  }

  if (currentLocation.toLowerCase() === destination.toLowerCase()) {
    return { message: "Current location and destination cannot be the same." };
  }

  if (currentLocation.length > 100 || destination.length > 100) {
    return { message: "Location names are too long." };
  }

  if (fullName.length > 60) {
    return { message: "Full name is too long." };
  }

  if (!phone.startsWith("+234")) {
    return { message: "Phone number must start with +234 (Nigeria)." };
  }

  return {
    message: "success",
    details: {
      currentLocation,
      destination,
      phone,
      fullName,
      gender,
    },
  };
}
