import React from "react";
import s from "./Profileinfo.module.css";


const Profileinfo = () => {
  return (
    <div>
      <img
        src="https://gas-kvas.com/grafic/uploads/posts/2023-10/1696602063_gas-kvas-com-p-kartinki-s-prirodoi-30.jpg"
        alt=""
      />
      <div className={s.discriptionBlock}>
        ava + discription
        </div>
    </div>
  );
};

export default Profileinfo;