import classNames from 'classnames/bind';
import styles from './Fotter.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('footer')}>
            <Link className={cx('creator')}>
                <img src={images.creator} alt="creator" />
                <div className={cx('title')}>
                    <h4>Create Tiktok effects get a reward</h4>
                </div>
            </Link>
            <div className={cx('info')}>
                <h4 className={cx('info-title')}>Company</h4>
                {/* <Link to="">About</Link>
                <Link to="">Newsroom</Link>
                <Link to="">Contact</Link>
                <Link to="">Careers</Link> */}
            </div>
            <div className={cx('info')}>
                <h4 className={cx('info-title')}>Program</h4>
                {/* <Link to="">TikTok for Good</Link>
                <Link to="">Advertise</Link>
                <Link to="">TikTok LIVE Creator Networks</Link>
                <Link to="">Developers</Link>
                <Link to="">Transparency</Link>
                <Link to="">TikTok Rewards</Link>
                <Link to="">TikTok Embeds</Link> */}
            </div>
            <div className={cx('info')}>
                <h4 className={cx('info-title')}>Terms & Policies</h4>
                {/* <Link to="">Help</Link>
                <Link to="">Safety</Link>
                <Link to="">Terms</Link>
                <Link to="">Privacy Policy</Link>
                <Link to="">Privacy Center</Link>
                <Link to="">Creator Academy</Link>
                <Link to="">Community Guidelines</Link> */}
            </div>
            <span className={cx('copyright')}>© 2024 TikTok</span>
        </footer>
    );
}

export default Footer;
