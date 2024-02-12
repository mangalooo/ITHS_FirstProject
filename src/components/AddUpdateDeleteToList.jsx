import { useState } from "react";

const ListManipulationExample = () => {
    const [data, setData] = useState(['Item 1', 'Item 2', 'Item 3']);

    const addItem = () => {
        const newData = [...data, 'New Item'];
        setData(newData);
    };

    const removeItem = (index) => {
        const removeData = [...data];
        removeData.splice(index, 1);
        setData(removeData);
    }

    const updateItem = (index) => {
        const updateData = [...data];
        updateData[index] = 'Updated item';
        setData(updateData);
    };

    return (
        <div>
            <ul>
                {data.map((item, index) => (
                    <il key={index}> 
                        {item} 
                        <button onClick={() => updateItem(index)}> Update </button> 
                        <button onClick={() => removeItem(index)}> Delete </button> 
                    </il> 
                ))}
            </ul>
            <button onClick={addItem}> Add </button>
            <br />
            
        </div>
    );
};

export default ListManipulationExample;