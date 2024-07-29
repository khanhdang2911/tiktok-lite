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
import { useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless'; // different import path!

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PopperWrapper from '~/components/Popper/Wrapper';

import HeaderMenu from './Header';
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
                {
                    code: 'en',
                    name: 'English',
                },
                {
                    code: 'en',
                    name: 'English',
                },
                {
                    code: 'en',
                    name: 'English',
                },
                {
                    code: 'en',
                    name: 'English',
                },
                {
                    code: 'en',
                    name: 'English',
                },
                {
                    code: 'en',
                    name: 'English',
                },
                {
                    code: 'en',
                    name: 'English',
                },
                {
                    code: 'en',
                    name: 'English',
                },
                {
                    code: 'en',
                    name: 'English',
                },
                {
                    code: 'en',
                    name: 'English',
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
function Menu({ isAuthen = false, children }) {
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
    //render item

    const [history, setHistory] = useState(() => {
        return isAuthen ? [{ data: menuAuthen }] : [{ data: menuItems }];
    });
    const items = history[history.length - 1];

    const handleBack = () => {
        setHistory((prev) => {
            return prev.slice(0, prev.length - 1);
        });
    };
    const handleClickItem = (item) => {
        const isParent = !!item.children;
        if (isParent) {
            setHistory((prev) => [...prev, item.children]);
        }
    };
    const handleResetMenu = () => {
        setHistory((prev) => {
            return prev.slice(0, 1);
        });
    };
    const renderItems = () => {
        return items.data.map((item, index) => {
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
                        handleClickItem(item);
                    }}
                >
                    {item.icon && <FontAwesomeIcon icon={item.icon} className={cx('icon')} />}
                    <div className={cx('name')}>{item.name}</div>
                </Comp>
            );
        });
    };

    const renderResult = (attrs) => {
        return (
            <div className={cx('menu')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <div className={cx('wrapper')}>
                        {history.length > 1 && <HeaderMenu onBack={handleBack}></HeaderMenu>}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <TippyHeadless
            hideOnClick={false}
            onHide={handleResetMenu}
            delay={[0, 700]}
            offset={[12, 10]}
            interactive
            appendTo={document.body}
            placement="bottom-end"
            render={renderResult}
        >
            {children}
        </TippyHeadless>
    );
}

export default Menu;
