import React from 'react';
import MenuElement from "./menu_element/menu_element";

const menuItems = [
    { name: 'Cake', price: '$1.00', emoji: '🍰', isNew: true, buttonLabel: 'BUY' },
    { name: 'Burger', price: '$4.99', emoji: '🍔', buttonLabel: 'ADD' },
    { name: 'Fries', price: '$1.49', emoji: '🍟', buttonLabel: 'ADD' },
    { name: 'Hotdog', price: '$3.49', emoji: '🌭', buttonLabel: 'ADD' },
    { name: 'Taco', price: '$3.99', emoji: '🌮', buttonLabel: 'ADD' },
    { name: 'Pizza', price: '$7.99', emoji: '🍕', buttonLabel: 'ADD' },
    { name: 'Donut', price: '$1.49', emoji: '🍩', buttonLabel: 'ADD' },
    { name: 'Popcorn', price: '$1.99', emoji: '🍿', buttonLabel: 'ADD' },
    { name: 'Coke', price: '$1.49', emoji: '🥤', buttonLabel: 'ADD' },
    { name: 'Icecream', price: '$5.99', emoji: '🍦', buttonLabel: 'ADD' },
    { name: 'Cookie', price: '$3.99', emoji: '🍪', buttonLabel: 'ADD' },
    { name: 'Flan', price: '$7.99', emoji: '🍮', buttonLabel: 'ADD' },
];

const Menu: React.FC = () => {
    return (
        <div className="menu">
            {menuItems.map((item, index) => (
                <MenuElement
                    key={index}
                    name={item.name}
                    price={item.price}
                    emoji={item.emoji}
                    isNew={item.isNew}
                    buttonLabel={item.buttonLabel}
                />
            ))}
        </div>
    );
};

export default Menu;
