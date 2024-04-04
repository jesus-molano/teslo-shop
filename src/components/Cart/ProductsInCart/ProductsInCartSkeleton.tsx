import React from "react";

export const ProductsInCartSkeleton = () => {
  return (
    <>
      <div className="flex gap-2 w-full rounded-md animate-pulse">
        <div className="rounded-lg object-top object-cover w-24 h-32 bg-rose-200 ">
          &nbsp;
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <p className=" bg-rose-200 w-44 rounded-md">&nbsp;</p>
          <p className=" bg-rose-200 w-12 rounded-md">&nbsp;</p>
          <div className="flex items-center  justify-between gap-2 w-full">
            <div className="flex-1">
              <div className=" bg-rose-200 w-32 rounded-md">&nbsp;</div>
            </div>
            <div>
              <div className=" bg-rose-200 w-4  rounded-md">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 w-full rounded-md animate-pulse">
        <div className="rounded-lg object-top object-cover w-24 h-32 bg-rose-200 ">
          &nbsp;
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <p className=" bg-rose-200 w-44 rounded-md">&nbsp;</p>
          <p className=" bg-rose-200 w-12 rounded-md">&nbsp;</p>
          <div className="flex items-center  justify-between gap-2 w-full">
            <div className="flex-1">
              <div className=" bg-rose-200 w-32 rounded-md">&nbsp;</div>
            </div>
            <div>
              <div className=" bg-rose-200 w-4  rounded-md">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
