import React from 'react';
import menuData from '../data/menuData.json'; // Импорт JSON-файла с данными меню
import MenuElement from './menu_element';

const Menu: React.FC = () => {
    return (
        <div className="menu-grid">
            {menuData.map((item) => (
                <MenuElement key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Menu;
