
import React, { useState } from "react";

export default function Form(props) {
  const [val, setVal] = useState("");
  const [message, setMessage] = useState("");
  //const [valid, setValid] = useState(false);

  const list = [
    /^[a-zA-z0-9]{4,12}$/, //id
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/, //password
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/, //email
    /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/, //phone
  ];

  const onChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    setVal(val);

  

    // 갯수 검사
    if (name === "email") {
      props.emailChange(val)
    }

    if (name === "name") {
      props.nickNameChange(val)
      if (val.length < 2 || val.length > 5) {
        setMessage(props.errorMsg);
        //setValid(false);
      } else {
        setMessage(props.sucessMsg);
        //setValid(true);
      }
    }
  };

  // style={{ marginBottom: "10px" }}

  return (
    <div className="">
      <label htmlFor={props.htmlFor}>
        {props.text}
      </label>
      <input className="rounded-lg" id={props.id} name={props.name} value={val} onChange={onChange} placeholder={props.name} />
      <p className="text-sm mt-2"> {message} </p>
    </div>
  );
}
