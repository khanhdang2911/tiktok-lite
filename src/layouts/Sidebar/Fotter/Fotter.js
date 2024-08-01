import classNames from 'classnames/bind';
import styles from './Fotter.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Footer() {
    const [open, setOpen] = useState(-1);
    const handleClickExpand = (index) => {
        if (index === open) {
            setOpen(-1);
        } else {
            setOpen(index);
        }
    };
    const footerInfo = [
        {
            infoTitile: 'Company',
            linkDetail: ['About', 'Newsroom', 'Contact', 'Careers'],
        },
        {
            infoTitile: 'Program',
            linkDetail: [
                'TikTok for Good',
                'Advertise',
                'TikTok LIVE Creator Networks',
                'Developers',
                'Transparency',
                'TikTok Rewards',
                'TikTok Embeds',
            ],
        },
        {
            infoTitile: 'Terms & Policies',
            linkDetail: [
                'Help',
                'Safety',
                'Terms',
                'Privacy Policy',
                'Privacy Center',
                'Creator Academy',
                'Community Guidelines',
            ],
        },
    ];
    return (
        <footer className={cx('footer')}>
            <Link className={cx('creator')}>
                <img src={images.creator} alt="creator" />
                <div className={cx('title')}>
                    <h4>Create Tiktok effects get a reward</h4>
                </div>
            </Link>
            {footerInfo.map((item, index) => {
                return (
                    <div className={cx('info')} key={index}>
                        <h4
                            className={cx('info-title', { active: index === open })}
                            onClick={() => {
                                handleClickExpand(index);
                            }}
                        >
                            {item.infoTitile}
                        </h4>
                        {item.linkDetail.map((link, i) => {
                            return index === open ? (
                                <Link key={`${index}-${i}`} className={cx('link-detail')} to="">
                                    {link}
                                </Link>
                            ) : (
                                null
                            );
                        })}
                    </div>
                );
            })}

            <span className={cx('copyright')}>© 2024 TikTok</span>
        </footer>
    );
}

export default Footer;
