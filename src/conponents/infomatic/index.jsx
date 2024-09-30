import React from "react";
import "./index.css";

export default function Wrestler(props) {
  return (
    <main className="">
      <div className="flex infomatic">
        <section>
          <img src={props.Image} alt={props.Alt} />
        </section>
        <section className="infomatic">
          <div className="fs-800">
            <h3 className="fs-600">{props.Nickname}</h3>
            <h1>{props.Name}</h1>
          </div>
          <div>
            <p>{props.Description}</p>
            <p>{props.Description}</p>
            <p>{props.Description}</p>
          </div>
        </section>
      </div>
      <section className="flex facts--all">
        <div className="bordered facts--single">
          <h2>Fact #1</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, id.</p>
        </div>
        <div className="bordered">
          <h2>Fact #2</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, id.</p>
        </div>
        <div className="bordered">
          <h2>Fact #3</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, id.</p>
        </div>
        <div className="bordered">
          <h2>Fact #4</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, id.</p>
        </div>
      </section>
    </main>
  );
}
