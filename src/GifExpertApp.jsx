import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory.toUpperCase())) return;
    setCategories([newCategory.toUpperCase(), ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Listado de Gifs */}
      {categories?.map((category, index) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
