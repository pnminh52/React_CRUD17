import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ products, onUpdate }) => {
  const { id } = useParams();
  const crtPrd = products.find((item) => item.id == id);
  const finalUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...crtPrd, ...inputValue };
    onUpdate(updateData);
  };
  const [inputValue, setInputValue] = useState({});
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  return (
    <div>
      <form action="" onSubmit={finalUpdate}>
        <input
          defaultValue={crtPrd?.name}
          type="text"
          placeholder="name"
          onInput={onChange}
          name="name"
        />
        <input
          defaultValue={crtPrd?.des}
          type="text"
          placeholder="des"
          onInput={onChange}
          name="des"
        />
        <input
          defaultValue={crtPrd?.img}
          type="text"
          placeholder="img"
          onInput={onChange}
          name="img"
        />
        <input
          defaultValue={crtPrd?.price}
          type="text"
          placeholder="price"
          onInput={onChange}
          name="price"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Update;
