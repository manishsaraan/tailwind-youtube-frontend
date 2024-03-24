import React from 'react';


export const Short = (props:any) => {
    return (
        <div className="p-3 cursor-pointer">
        <img className="w-full rounded-xl min-h-100" src={props.image} alt="" />
        <div className="grid grid-cols-12 pt-2">
          <div className="col-span-1 col-span-2 flex justify-center pt-1">
            <img
              className="rounded-full w-12 h-12 v"
              src={props.thumbImage}
              alt=""
            />
          </div>
          <div className="col-span-10 pl-4">
            <div className="text-xl text-black line-clamp-2">{props.title}</div>
   
            <div className="col-span-11 text-gray-400 text-base flex">
              {props.views}  
            </div>
          </div>
        </div>
      </div>
    );
}