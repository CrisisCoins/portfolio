import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div
      className="relative flex items-center justify-center h-auto w-full shadow-md shadow-[#34393f]/40 
    rounded-xl  p-4 group hover:bg-gradient-to-r from-[#f6f6f6] to-[#878883]"
    >
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-[#41495c] tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-[#41495c] text-center">NexJS</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg border-2 border-[#41495c] bg-[#f6f6f6] text-[#41495c] font-semibold text-md cursor-pointer">
            See More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
