import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length < 1) return;
    
  /*   setCategories((cat) => [inputValue, ...cat]);
    setInputValue(""); */
    onNewCategory(newInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onChangeInput}
      />
    </form>
  );
};
