import { useState } from "react";

export default function HelloMyNamePage() {
  const [name,setName] = useState("");
  const [name2,setName2] = useState("");
  const inputName = (event : any) =>{
    setName(event.target.value)
  }
  const submit = () => {
    if (name == ""){
      setName2("please input") 
    }else {
      setName2(name)
    }
  }
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        value={name}
        onChange={inputName}
      />
      <button className="btn btn-primary" onClick={submit}>Greet Me</button>
      {/* Result Text */}
      <p>{name2}</p>
    </div>
  );
}
