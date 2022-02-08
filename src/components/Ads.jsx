import React from "react";
const ADS = [
  {
    id: 1,
    title: "Ads 1",
    image:
      "https://www.grouphigh.com/wp-content/uploads/2015/09/mcdonalds-875x330.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Ads 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktWd-hiD6kg1Y72Kk4HW4precm-xbTspPvw&usqp=CAU",
    link: "#",
  },
  {
    id: 3,
    title: "Ads 3",
    image:"https://lh3.googleusercontent.com/YeImnFkq_Odr8TAusX8men4U2DpS1GnXyJNJjKAKPe0z8GAqkrPoHGK9ob6_wKqqpHcPI6Mlo_dnv7QpMUWmA9LnihKViC_hSaO2WQ=s0",
    link: "#",
  },
];
function Ads() {
  return (
    <div className="grid grid-flow-row p-4 h-screen overflow-y-auto">
      {ADS.map((ad, idx) => {
        return (
          <div
            key={idx}
            className="col-span-1"
          >
            <a href={ad.link} className="h-full">
              <img src={ad.image} alt={ad.title} className="w-full" />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Ads;
