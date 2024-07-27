import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img src={data.avatar} className={cx('avatar')} alt={data.nickname} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {data.full_name}
                    {data.tick && (
                        <span>
                            <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                        </span>
                    )}
                </h4>
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </div>
    );
}

export default AccountItem;
