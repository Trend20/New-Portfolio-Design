import React from "react";
import Link from "next/link";
import { BiLinkExternal} from 'react-icons/bi';
const WorkCard = ({ img, name, description, onClick, url }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-30 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "300px" }}
      >
        <img
          alt={name}
          className="h-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <Link href={url}>
        <BiLinkExternal size={40} />
      </Link>
    </div>
  );
};

export default WorkCard;
