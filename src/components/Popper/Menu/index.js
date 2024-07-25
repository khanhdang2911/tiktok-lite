import { faEarthAmericas, faHandshake, faHouseUser, faMoon } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
const menuItems = [
    {
        icon: faHouseUser,
        name: 'Create tools',
    },
    {
        icon: faEarthAmericas,
        name: 'English',
    },
    {
        icon: faHandshake,
        name: 'Feedback and help',
    },
    {
        icon: faMoon,
        name: 'Dark mode',
    },
];
function Menu() {
    return (
        <div className={cx('wrapper')}>
            {menuItems.map((item, index) => {
                return (
                    <div className={cx('item')} key={index}>
                        <FontAwesomeIcon icon={item.icon} className={cx('icon')} />
                        <div className={cx('name')}>{item.name}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default Menu;
