import React from 'react';

type MenuElementProps = {
    name: string;
    price: string;
    emoji: string;
    isNew?: boolean;
    buttonLabel: string;
};

const MenuElement: React.FC<MenuElementProps> = ({ name, price, emoji, isNew = false, buttonLabel }) => {
    return (
        <div className="menu-element">
            <div className="emoji">{emoji}</div>
            <div className="details">
                <h3 className="name">{name}</h3>
                <span className="price">{price}</span>
                {isNew && <span className="new-badge">NEW</span>}
            </div>
            <button className="action-button">{buttonLabel}</button>
        </div>
    );
};

export default MenuElement;
