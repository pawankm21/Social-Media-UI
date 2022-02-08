// import { useState } from "react";
import { Switch } from "@headlessui/react";
import useDark from "../hooks/useDark";

export default function Toggle() {
  const [dark, setDark] = useDark(false);

  return (
    <Switch
      checked={dark}
      onChange={setDark}
      className={`${
        dark ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex items-center self-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          dark ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
}
