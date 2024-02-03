import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsData = [
    { id: 1, name: "Nikita" },
    { id: 2, name: "Nikolay" },
    { id: 3, name: "Maria" },
    { id: 4, name: "Maksim" },
    { id: 5, name: "Galina" },
    { id: 6, name: "Roman" },
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ];

  let dialogsElements = dialogsData.map(d =>
    <DialogItem name={d.name} id={d.id} />
  );
  let messagesElements = messagesData.map(m => 
    <Message message={m.message} id={m.id} />
  );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
