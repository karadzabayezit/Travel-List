import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Shirts", quantity: 6, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  const handleAddItem = (item) => setItems((prev) => [...prev, item]);

  const handleDelete = (id) => setItems(() => items.filter((item) => id !== item.id));
  const handleToggleItem = (id) => {
    setItems(() => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  };
  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        handleToggleItem={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
