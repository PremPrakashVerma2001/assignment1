import React from "react";

const Card = (props) => {
  return (
    <div className="text-center w-44 cursor-pointer hover:shadow-2xl">
      <img className=" rounded-t-md" src={props.item.image} />
      <div className="bg-slate-100">
        <h3 className="font-bold text-slate-950">{props.item.name}</h3>
        <h3 className="font-bold text-sm text-slate-600">{props.item.title}</h3>
      </div>
    </div>
  );
};

export default Card;
