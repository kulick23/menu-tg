import React, { useState } from 'react';
import Modal from './modal';

interface MenuItem {
    id: number;
    name: string;
    price: number | number[];
    weight?: number | number[];
    image: string;
    currentIngredients?: string[];
    currentSauce?: string[];
    size?: string[] | number[];
}

interface MenuElementProps {
    item: MenuItem;
}

const MenuElement: React.FC<MenuElementProps> = ({ item }) => {
    const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
    const [ingredients, setIngredients] = useState<{ [key: string]: number }>(
        item.currentIngredients?.reduce((acc, ing) => ({ ...acc, [ing]: 1 }), {}) || {}
    );
    const [isModalOpen, setModalOpen] = useState(false);

    const allExtraIngredients = ['Cheese', 'Bacon', 'Mushrooms', 'Olives', 'Peppers'];
    const allSauces = ['Ketchup', 'Mustard', 'Mayo', 'BBQ Sauce', 'Sour Cream'];

    const increaseIngredient = (ingredient: string) => {
        setIngredients({
            ...ingredients,
            [ingredient]: (ingredients[ingredient] || 0) + 1,
        });
    };

    const decreaseIngredient = (ingredient: string) => {
        setIngredients({
            ...ingredients,
            [ingredient]: Math.max((ingredients[ingredient] || 0) - 1, 0),
        });
    };

    const getPrice = () => {
        return Array.isArray(item.price) ? item.price[selectedSizeIndex] : item.price;
    };

    const getWeight = () => {
        return Array.isArray(item.weight) ? item.weight[selectedSizeIndex] : item.weight;
    };

    const currentIngredients = Object.keys(ingredients).filter(ingredient => ingredients[ingredient] > 0);
    const extraIngredients = allExtraIngredients.filter(extra => !currentIngredients.includes(extra));
    const sauces = allSauces.filter(sauce => !currentIngredients.includes(sauce));

    const modalContent = (
        <div>
            {currentIngredients.length > 0 && (
                <>
                    <h3>Current Ingredients:</h3>
                    <ul className="ingredients-list">
                        {currentIngredients.map((ingredient) => (
                            <li key={ingredient}>
                                {ingredient} x{ingredients[ingredient]}{' '}
                                <button onClick={() => increaseIngredient(ingredient)}>+</button>
                                <button onClick={() => decreaseIngredient(ingredient)}>-</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {extraIngredients.length > 0 && (
                <>
                    <h3>Add Extra Ingredients:</h3>
                    <ul className="ingredients-list">
                        {extraIngredients.map((extra) => (
                            <li key={extra}>
                                {extra} x{ingredients[extra] || 0}{' '}
                                <button onClick={() => increaseIngredient(extra)}>+</button>
                                <button onClick={() => decreaseIngredient(extra)}>-</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {sauces.length > 0 && (
                <>
                    <h3>Add Sauces:</h3>
                    <ul className="ingredients-list">
                        {sauces.map((sauce) => (
                            <li key={sauce}>
                                {sauce} x{ingredients[sauce] || 0}{' '}
                                <button onClick={() => increaseIngredient(sauce)}>+</button>
                                <button onClick={() => decreaseIngredient(sauce)}>-</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );

    return (
        <div className="menu-item">
            <img
                src={require(`../assets/${item.image}`)}
                alt={item.name}
                className="menu-item-image"
            />
            <h2>{item.name}</h2>

            {item.size && (
                <div className="size-selector">
                    <label>Size:</label>
                    {item.size.map((size, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedSizeIndex(index)}
                            className={selectedSizeIndex === index ? 'active' : ''}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            )}

            <p>Price: ${getPrice()}</p>
            {item.weight && <p>Weight: {getWeight()}g</p>}

            {item.currentIngredients && (
                <>
                    <button onClick={() => setModalOpen(true)}>
                        Customize Ingredients
                    </button>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setModalOpen(false)}
                        content={modalContent}
                    />
                </>
            )}

            <button className="buy-button">Buy</button>
        </div>
    );
};

export default MenuElement;
