import clsx from "clsx";
import Image from "next/image";
import * as React from "react";

interface userProps {
  item: {
    id: string | number;
    name: string;
    role: string;
    comment: string;
    avatarUrl: string;
  };
  containerClassName?: string;
}

const TestimonialItem = ({ item, containerClassName }: userProps) => {
  return (
    <div className={clsx("relative px-14 pt-11 pb-14", containerClassName,)}>
     <blockquote>
      {item.comment}
     </blockquote>
     <div className="flex items-center max-xl:-mr-8">
      <div className="mr-4 size-20 shrink-0 rounded-half border-2 border-s2 p-1.5">
       <Image src={item.avatarUrl} alt={item.name} height={80} width={80} className="size-full object-cover" />
      </div>
      <div>
       <h4 className="body-2 mb-0.5 text-p1">{item.name}</h4>
       <p className="small-compact uppercase text-s3">{item.role}</p>
      </div>
     </div>
    </div>
  );
};

export default TestimonialItem;
