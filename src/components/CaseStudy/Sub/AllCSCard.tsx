import Image from "next/image";
import React from "react";
import walletIcon from "../../../../public/casestudy/walle-icon.svg";
import flashIcon from "../../../../public/casestudy/flash-icon.svg";
import dropIcon from "../../../../public/casestudy/drop-icon.svg";
import judgeIcon from "../../../../public/casestudy/judge-icon.svg";
import Link from "next/link";

const ALLCARDS_DATA = [
  {
    img: walletIcon,
    title: "South Georgia Bank",
    description: "Client success story",
    tag: "Financial",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20South%20GA%20Bank%20Client%20Success%20Story.pdf",
  },
  {
    img: walletIcon,
    title: "Banco de Brasil",
    description: "Client success story",
    tag: "Financial",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20Banco%20do%20Brasil%20Americas%20Client%20Success%20Story.pdf",
  },
  {
    img: walletIcon,
    title: "FWCCU",
    description: "Client success story",
    tag: "Financial",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20FWCCU%20Client%20Success%20Story.pdf",
  },
  {
    img: flashIcon,
    title: "Prarieland",
    description: "Client success story",
    tag: "Energy & Electric",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20Prairie%20Land%20Electric%20Client%20Success%20Story.pdf",
  },
  {
    img: flashIcon,
    title: "Pioneer",
    description: "Client success story",
    tag: "Energy & Electric",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20Pioneer%20Electric%20Client%20Success%20Story.pdf",
  },
  {
    img: dropIcon,
    title: "Greensboro",
    description: "Client success story",
    tag: "Water & Wastewater",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20City%20of%20Greensboro%20Water%20Resources%20Client%20Success%20Story.pdf",
  },
  {
    img: judgeIcon,
    title: " Quirch Foods",
    description: "Client success story",
    tag: "Manufacturing",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20Quirch%20Foods%20Client%20Success%20Story.pdf",
  },
];

const AllCSCard = () => {
  return (
    <div className="grid items-center lg:grid-cols-4 gap-5">
      {ALLCARDS_DATA.map(({ img, title, description, tag, link }, i) => {
        return (
          <div
            className="p-5 border border-gray-300 rounded-lg w-max"
            key={title + i}
          >
            <Image src={img} alt="" className="" />
            <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
              {title}
            </h1>
            <p className="text-gray-500 mb-1">{description}</p>
            <span className="text-[#C94B12] text-xs font-semibold bg-[#FDEEE8] px-2 py-1 rounded">
              {tag}
            </span>
            <div className="lg:mt-10 mt-5 flex lg:gap-5 gap-3">
              <Link href={link} target="_blank">
                <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md">
                  View PDF
                </button>
              </Link>
              <Link href={link} target="_blank">
                <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md ">
                  Download PDF
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllCSCard;
