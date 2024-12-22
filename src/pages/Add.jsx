import React from "react";

const Add = (props) => {
  const { onAdd, onChange } = props;
  return (
    <div>
      <form action="" onSubmit={onAdd}>
        <input type="text" placeholder="name" onInput={onChange} name="name" />
        <input type="text" placeholder="des" onInput={onChange} name="des" />
        <input type="text" placeholder="img" onInput={onChange} name="img" />
        <input
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

export default Add;
