import { useEffect, useRef, useState } from 'react';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import TippyHeadless from '@tippyjs/react/headless'; // different import path!
import PopperWrapper from '~/components/Popper/Wrapper';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDebounce from '~/hooks/useDebounce';
import search from '~/services/searchService';
const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(true);

    const debouncedValue = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            try {
                const respone = await search(debouncedValue);
                setLoading(false);

                return respone.data;
            } catch (error) {
                console.log('Co loi', error.message);
            }
        };
        fetchApi().then((data) => {
            setSearchResult(data);
        });
    }, [debouncedValue]);
    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleChangeInput = (e) => {
        const value = e.target.value;
        if (value.startsWith(' ')) {
            return;
        }
        setSearchValue(value);
    };
    return (
        <TippyHeadless
            visible={showResult && searchResult.length > 0}
            interactive
            appendTo={document.body}
            render={(attrs) => {
                return (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((item) => {
                                return <AccountItem key={item.id} data={item} />;
                            })}
                        </PopperWrapper>
                    </div>
                );
            }}
            onClickOutside={() => {
                setShowResult(false);
            }}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={handleChangeInput}
                    className={cx('search-input')}
                    placeholder="Search"
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
