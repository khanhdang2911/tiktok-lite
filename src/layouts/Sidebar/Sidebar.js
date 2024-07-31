import MenuSidebar, { MenuItem } from './MenuSidebar';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import AccountInSidebar from '~/components/AccountInSidebar';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import { get } from '~/utils/httpRequest';
import config from '~/config';
import Footer from './Fotter/Fotter';

import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function Sidebar() {
    const [visibleCount, setVisibleCount] = useState(6);
    const [followAccount, setFollowAccount] = useState([]);
    useEffect(() => {
        const result = get('users/search', {
            params: {
                q: 'a',
                type: 'more',
            },
        });
        result.then((respone) => {
            setFollowAccount(respone.data);
        });
    }, []);
    const handleClickSeeMore = () => {
        setVisibleCount((prev) => prev + 2);
    };
    return (
        <aside className={cx('wrapper')}>
            <MenuSidebar>
                <MenuItem
                    to={config.routes.home}
                    title={'For you'}
                    icon={<HomeIcon />}
                    iconActive={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    to={config.routes.following}
                    title={'Following'}
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupActiveIcon />}
                ></MenuItem>
                <MenuItem
                    to={config.routes.live}
                    title={'LIVE'}
                    icon={<LiveIcon />}
                    iconActive={<LiveActiveIcon />}
                ></MenuItem>
            </MenuSidebar>
            <div className={cx('account-list')}>
                <p className={cx('title')}>Following accounts</p>
                {followAccount.slice(0, visibleCount).map((account) => {
                    return (
                        <AccountInSidebar
                            key={account.id}
                            fullname={account.full_name}
                            nickname={account.nickname}
                            following={account.followings_count}
                            follower={account.followers_count}
                            avatar={account.avatar}
                        />
                    );
                })}
            </div>
            {visibleCount < followAccount.length ? (
                <button onClick={handleClickSeeMore} className={cx('btn-see-more')}>
                    See more
                </button>
            ) : (
                <></>
            )}
            <Footer/>
        </aside>
    );
}

export default Sidebar;
