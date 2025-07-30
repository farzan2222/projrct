import React, { useState } from "react";
import AddItemForm from "./AdditemForm.js";
import ItemList from "./ItemList";

function App() {
    const [items, setItems] = useState([]);

    const addItem = (name) => {
        const newItem = {
            id: items.length + 1,
            name,
        };
        setItems([...items, newItem]);
    };

    const updateItem = (id, newName) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, name: newName } : item
        );
        setItems(updatedItems);
    };
    const deleteItem = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    };  

    return (
        <div>
            <h1>Item List</h1>
            <AddItemForm addItem={addItem} />
            <ItemList items={items} updateItem={updateItem} deleteItem={deleteItem} />
            
        </div>
    );
}
   
    

export default App;
