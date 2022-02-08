import React from "react";
import classNames from "classnames";



export default function Table({title, data, className,cols}) {
  return (
    <div
      className={classNames(
        "m-2 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white ","w-full"
      )}
    >
      <h1 className="text-lg font-semibold text-gray-500 m-5" >{title }</h1>
      <table className="w-full ">
        <thead className="">
          <tr>
            {cols.map((col) => (
              <th
                key={col}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              {cols.map((col) => (
                <td
                  className="border-white border-2 bg-gray-100 text-xs px-6 py-3"
                  key={col}
                >
                  {data[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
