import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    small = false,
    large = false,
    text = false,
    disable = false,
    icon,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    let props = { ...passProps, onClick };
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on')) {
                delete props.key;
            }
        });
    }
    let classes = cx('wrapper', {
        primary,
        outline,
        rounded,
        text,
        small,
        large,
        disable,
    });
    return (
        <Comp className={classes} {...props}>
            {icon && <FontAwesomeIcon className={cx('icon')} icon={icon} />}
            {<span className={cx('title')}>{children}</span>}
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    disable: PropTypes.bool,
    icon: PropTypes.object,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};
export default Button;
