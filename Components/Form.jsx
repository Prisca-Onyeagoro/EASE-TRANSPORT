"use client";
import React, { useActionState, useEffect } from "react";
import InputField from "./InputField";
import serverForm from "@/lib/serveractions";
import SelectedField from "./SelectedField";
import TextField from "./TextField";
import FormError from "./FormError";
import Submitbutton from "./Submitbutton";
import { useRouter } from "next/navigation";
export default function Form() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(serverForm, {
    message: "",
  });

  useEffect(() => {
    if (state?.message === "success" && state?.details) {
      localStorage.setItem("details", JSON.stringify(state.details));
      router.push("/order");
    }
  }, [state.message, state.details, router]);
  return (
    <div className="pt-12 lg:p-20">
      <form action={formAction}>
        <div className="min-h-screen  from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl">
            {/* Form Card */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700">
              <InputField
                name="fullName"
                label="What's your name?"
                icon="Group"
                placeholder={"Enter your fullname"}
              />
              <InputField
                name="currentLocation"
                label="Current Location"
                icon="MapPin"
                placeholder={"Enter your current Location"}
              />
              <InputField
                name="destination"
                label="Where are you going?"
                icon="MapPin"
                placeholder="e.g. Victoria Island"
              />
              <InputField
                name="phone"
                label="Phone Number"
                icon="Phone"
                type="tel"
                placeholder="+2348012345678"
              />
              <SelectedField name="gender" label="Gender" icon="User" />
              <TextField
                name="notes"
                label="Additional Notes (Optional) "
                icon="FileText"
                placeholder="Any Special Request"
              />
              <Submitbutton isPending={isPending} />
            </div>
            <FormError message={state?.message} />
          </div>
        </div>
      </form>
    </div>
  );
}
