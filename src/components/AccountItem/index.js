import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b6b571a8932414bf3cd473cd094dc966.jpeg?lk3s=a5d48078&nonce=99392&refresh_token=1edd3316574d69bb68831b99fdb03d3e&x-expires=1721962800&x-signature=urvLYfzXN8uZHa1letwBBh%2FH1HU%3D&shp=a5d48078&shcp=81f88b70"
                className={cx("avatar")}
                alt="Avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>Nguyen Van A <span><FontAwesomeIcon className={cx("check")} icon={faCircleCheck}/></span></h4>
                <p className={cx('username')}>anguyen123</p>
            </div>
            
        </div>
    );
}

export default AccountItem;
