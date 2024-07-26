import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless'; // different import path!
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import PopperWrapper from '~/components/Popper/Wrapper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { MessageIcon, InboxIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

function Header() {
    //Neu user da dang nhap
    const userCurrent = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
                <TippyHeadless
                    visible={false}
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
                </TippyHeadless>
                <div className={cx('action')}>
                    {userCurrent ? (
                        <>
                            <Tippy content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary icon={faSignIn}>
                                Log in
                            </Button>
                        </>
                    )}

                    <TippyHeadless
                        // visible
                        delay={[0, 700]}
                        offset={[12, 10]}
                        interactive
                        appendTo={document.body}
                        placement="bottom-end"
                        render={(attrs) => {
                            return (
                                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        {userCurrent ? (
                                            <>
                                                <Menu isAuthen={true}></Menu>
                                            </>
                                        ) : (
                                            <Menu></Menu>
                                        )}
                                    </PopperWrapper>
                                </div>
                            );
                        }}
                    >
                        {userCurrent ? (
                            <Image
                                src=""
                                className={cx('user-avatar')}
                                alt="Avatar"
                                fallback="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0119a1ed646b7de1c87ed134d617c43e.jpeg?lk3s=a5d48078&nonce=80920&refresh_token=0192ccd91569cb51248806e976b98165&x-expires=1722146400&x-signature=E5LRRl5apvCzpi4ZfCQoB8yOifg%3D&shp=a5d48078&shcp=81f88b70"
                            />
                        ) : (
                            <button className={cx('icon-more')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faEllipsisVertical} />
                            </button>
                        )}
                    </TippyHeadless>
                </div>
            </div>
        </header>
    );
}

export default Header;
