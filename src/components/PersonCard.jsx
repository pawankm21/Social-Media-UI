import React from 'react'

function PersonCard({person}) {
    return (
      <div className=" m-2 bg-white dark:bg-blue-900 rounded-xl  shadow-xl text-center pb-2">
        <div className="h-1/2 flex  justify-center  w-full bg-blue-500 rounded-t-lg">
          <img
            className="w-24 h-24 rounded-full object-cover mt-8 
                relative top-10 object-center border-white border-8"
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt={person.name}
          />
        </div>
        <div className="mt-10 pl-2 pr-2 pb-4">
          <h1 className="font-semibold text-xl truncate underline hover:text-blue-900">
            <a href="/person">{person.name}</a>
          </h1>
          <p className="text-sm italic">{person.des}</p>
          <button className="p-1 tex-center w-full hover:bg-blue-300 transition duration-300 ease-in-out mt-4 rounded-lg text-sm text-blue-900 bg-blue-200">
            Add
          </button>
        </div>
      </div>
    );
}

export default PersonCard
