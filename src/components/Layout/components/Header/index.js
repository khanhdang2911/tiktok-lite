import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import PopperWrapper from '~/components/Popper/Wrapper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
                <Tippy
                    visible
                    interactive
                    appendTo={document.body}
                    render={(attrs) => {
                        return (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>You may like</h4>
                                    <ul className={cx('all-news')}>
                                        <li className={cx('news')}>
                                            <FontAwesomeIcon
                                                className={cx('icon-search-result')}
                                                icon={faMagnifyingGlass}
                                            />
                                            Lorem new cans diy skhy yut
                                        </li>
                                        <li className={cx('news')}>
                                            <FontAwesomeIcon
                                                className={cx('icon-search-result')}
                                                icon={faMagnifyingGlass}
                                            />
                                            Lorem new cans diy skhy yut
                                        </li>
                                        <li className={cx('news')}>
                                            <FontAwesomeIcon
                                                className={cx('icon-search-result')}
                                                icon={faMagnifyingGlass}
                                            />
                                            Lorem new cans diy skhy yut
                                        </li>
                                    </ul>

                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem></AccountItem>
                                    <AccountItem></AccountItem>
                                </PopperWrapper>
                            </div>
                        );
                    }}
                >
                    <div className={cx('search')}>
                        <input className={cx('search-input')} placeholder="Search" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary icon={faSignIn}>
                        Log in
                    </Button>
                    <button>
                        <FontAwesomeIcon className={cx("icon")} icon={faEllipsisVertical} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
