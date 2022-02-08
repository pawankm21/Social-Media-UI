import React from "react";
import classNames from "classnames";

function CardDashboard({
  color,
  name,
  value,
  Icon,
  iconColor,
  onClick,
  className,
  children,
}) {
  return (
    <div
      className={classNames(
        `bg-${color ? color : "blue"}-400`,
        "p-2",
        "m-2",
        "rounded-lg",
        "shadow-lg",
        "text-white"
      )}
    >
      <div className="flex relative w-full ">
        {" "}
        <h1 className="text-xl font-semibold text-gray-100 ml-1 capitalize">
          {name}
        </h1>
        <div
          className={classNames(
            `w-8 p-1 text-${color ? color : "blue"}-900 absolute right-0`
          )}
        >
          {Icon}
        </div>
      </div>

      <p
        className={classNames(
          "text-2xl",
          `bg-${color ? color : "blue"}-500`,
          "p-2",
          "rounded-lg",
          "shadow-sm",
          "mt-4"
        )}
      >
        {value}
      </p>
    </div>
  );
}

export default CardDashboard;
