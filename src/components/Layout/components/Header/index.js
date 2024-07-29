import { Link } from 'react-router-dom';
import { faSignIn, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { MessageIcon, InboxIcon } from '~/components/Icons';
import Search from '../Search';
import routes from '~/config/routes';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function Header() {
    //Neu user da dang nhap
    const userCurrent = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="logo" />
                    </Link>
                </div>
                <Search />
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    {userCurrent ? (
                        <>
                            <Tippy content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>

                            <Tippy content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>123</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary icon={faSignIn}>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu isAuthen={true}>
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
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
