import classNames from 'classnames/bind';
import styles from './AccountInSidebar.module.scss';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../Popper/Wrapper';
import Image from '../Image';
const cx = classNames.bind(styles);
function AccountInSidebar({ fullname, nickname, following, follower, avatar }) {
    return (
        <Tippy
            interactive
            offset={[-10, 5]}
            delay={[500, 500]}
            placement="bottom"
            render={(attrs) => (
                <div className={cx('box')} tabIndex="-1" {...attrs}>
                    <Wrapper>
                        <div className={cx('wrapper-info')}>
                            <div className={cx('top-info-preview')}>
                                <Image className={cx('avatar-preview')} src={avatar} alt={nickname} />
                                <p className={cx('user-name')}>{nickname}</p>
                            </div>
                            <div className={cx('bottom-info-preview')}>
                                <p>
                                    <strong>{follower} </strong>
                                    Follower
                                </p>
                                <p>
                                    <strong>{following} </strong>
                                    Following
                                </p>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            )}
        >
            <div className={cx('account-item')}>
                <Image src={avatar} alt={nickname} className={cx('avatar')} />
                <div className={cx('info')}>
                    <p className={cx('user-name')}>{nickname}</p>
                    <p className={cx('full-name')}>{fullname}</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountInSidebar;
