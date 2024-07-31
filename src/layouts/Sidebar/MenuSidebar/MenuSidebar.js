import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuSidebar.module.scss';
const cx = classNames.bind(styles);
function MenuSidebar({ children }) {
    return <div className={cx('menu')}>{children}</div>;
}

MenuSidebar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MenuSidebar;
