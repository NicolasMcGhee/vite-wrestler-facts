import React from "react";
import "./index.css";

export default function Wrestler(props) {
  return (
    <main className="container">
      {/* Top Section */}
      <section className="flex infomatic--total">
        <div className="image">
          <img src={props.Image} alt={props.Alt} width={1000} />
        </div>
        <div className="infomatic">
          {/* Title */}
          <div className="fs-800 center infomatic--title">
            <h3 className="fs-600">{props.Nickname}</h3>
            <h1>{props.Name}</h1>
          </div>
          {/* Description */}
          <div className="flex informatic--desc">
            <p>{props.Description}</p>
            <p>{props.Description}</p>
            <p>{props.Description}</p>
          </div>
          {/* Change Informatic */}
          <div className="flex informatic--button">
            <button>History</button>
            <button>General Stats</button>
            <button>????????</button>
          </div>
        </div>
      </section>
      <section></section>
      {/* Bottom Section */}
      <section className="flex facts--all">
        <div className="bordered facts--single">
          <h2>Fact #1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, id.
          </p>
        </div>
        <div className="bordered">
          <h2>Fact #2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, id.
          </p>
        </div>
        <div className="bordered">
          <h2>Fact #3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, id.
          </p>
        </div>
        <div className="bordered">
          <h2>Fact #4</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, id.
          </p>
        </div>
      </section>
    </main>
  );
}
