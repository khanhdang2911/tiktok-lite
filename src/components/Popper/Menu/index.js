import { Link } from 'react-router-dom';
import {
    faCoins,
    faEarthAmericas,
    faHandshake,
    faHouseUser,
    faMoon,
    faPerson,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import HeaderMenu from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
const menuItems = [
    {
        icon: faHouseUser,
        name: 'Create tools',
    },
    {
        icon: faEarthAmericas,
        name: 'Language',
        children: {
            data: [
                {
                    code: 'vn',
                    name: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    name: 'English',
                },
            ],
        },
    },
    {
        icon: faHandshake,
        name: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: faMoon,
        name: 'Dark mode',
    },
];
function Menu({ isAuthen = false }) {
    let menuAuthen;
    if (isAuthen === true) {
        menuAuthen = [
            {
                icon: faPerson,
                name: 'View profile',
                to: '/profile',
            },
            {
                icon: faCoins,
                name: 'Get coins',
            },
            ...menuItems,
            {
                icon: faSignOut,
                name: 'Log out',
                saparate: true,
            },
        ];
    }
    const [history, setHistory] = useState(() => {
        return isAuthen ? [{ data: menuAuthen }] : [{ data: menuItems }];
    });
    const items = history[history.length - 1];
    const handleBack = () => {
        setHistory((prev) => {
            return prev.slice(0, 1);
        });
    };
    return (
        <div className={cx('wrapper')}>
            {history.length > 1 && <HeaderMenu onBack={handleBack}></HeaderMenu>}
            {items.data.map((item, index) => {
                let Comp = 'div';
                let props = {};
                if (item.to) {
                    Comp = Link;
                    props.to = item.to;
                }
                return (
                    <Comp
                        {...props}
                        className={cx('item', {
                            saparate: item.saparate,
                        })}
                        key={index}
                        onClick={() => {
                            const isParent = !!item.children;
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                            }
                        }}
                    >
                        {item.icon && <FontAwesomeIcon icon={item.icon} className={cx('icon')} />}
                        <div className={cx('name')}>{item.name}</div>
                    </Comp>
                );
            })}
        </div>
    );
}

export default Menu;
