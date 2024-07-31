import classNames from 'classnames/bind';
import styles from './MenuSidebar.module.scss';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);
function MenuItem({ to, title, icon,iconActive }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('icon-active')}>{iconActive}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
export default MenuItem;
