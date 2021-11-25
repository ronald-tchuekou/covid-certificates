import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import DOMAnimation from '../scripts/slide_animations';

export const NavBar = (props) => {
    const nav_ref = React.useRef(null);

    const { color, current } = props;

    const [show, setShow] = React.useState(false);

    const router = useRouter();

    React.useEffect(() => {
        if (show) {
            DOMAnimation.slideDown(nav_ref.current);
        } else {
            DOMAnimation.slideUp(nav_ref.current);
        }
    }, [show]);

    return (
        <nav className={`navbar ${color}`}>
            <div className={`lg-nav`}>
                <div className="navbar-logo cursor-pointer" onClick={() => router.push('/')}>
                    LOGO
                </div>
                <div className="navbar-nav">
                    {/* <div className="navbar-nav-item">
                        <svg viewBox="0 0 35 35" fill="none">
                            <path
                                d="M1.03906 17.5C1.03906 24.6641 5.63281 30.7344 11.9766 32.9766V2.02344C5.63281 4.26562 1.03906 10.3359 1.03906 17.5Z"
                                fill="#428BC1"
                            />
                            <path
                                d="M33.8516 17.5C33.8516 10.3359 29.3125 4.26562 22.9141 2.02344V32.9766C29.3125 30.7344 33.8516 24.6641 33.8516 17.5Z"
                                fill="#ED4C5C"
                            />
                            <path
                                d="M11.9766 32.9766C13.6719 33.5781 15.5312 33.9062 17.4453 33.9062C19.3594 33.9062 21.2188 33.5781 22.9141 32.9766V2.02344C21.2188 1.42188 19.4141 1.09375 17.4453 1.09375C15.4766 1.09375 13.6719 1.42188 11.9766 2.02344V32.9766Z"
                                fill="white"
                            />
                        </svg>
                    </div> */}
                    <div
                        className={`navbar-nav-item ${current === 1 ? 'active' : ''}`}
                        onClick={() => router.push('/')}
                    >
                        Home
                    </div>
                    <div
                        className={`navbar-nav-item ${current === 2 ? 'active' : ''}`}
                        onClick={() => router.push('/subscribe')}
                    >
                        Subscribe
                    </div>
                    <div
                        className={`navbar-nav-item ${current === 3 ? 'active' : ''}`}
                        onClick={() => router.push('contact')}
                    >
                        Contacts
                    </div>
                    <div
                        className={`navbar-nav-item ${current === 4 ? 'active' : ''}`}
                        onClick={() => router.push('about')}
                    >
                        About us
                    </div>
                </div>
            </div>
            <div className={`sm-nav`}>
                <div className="first-nav">
                    <div className="navbar-logo cursor-pointer" onClick={() => router.push('/')}>
                        LOGO
                    </div>
                    <div className="nav-options">
                        <button onClick={() => setShow((s) => !s)} className="btn icon-btn contained-white">
                            {show ? <i className="fi fi-rr-cross-small"></i> : <i className="fi fi-rr-menu-burger"></i>}
                        </button>
                    </div>
                </div>
                <div ref={nav_ref} className="navbar-nav">
                    {/* <div className="navbar-nav-item">
                        <svg viewBox="0 0 35 35" fill="none">
                            <path
                                d="M1.03906 17.5C1.03906 24.6641 5.63281 30.7344 11.9766 32.9766V2.02344C5.63281 4.26562 1.03906 10.3359 1.03906 17.5Z"
                                fill="#428BC1"
                            />
                            <path
                                d="M33.8516 17.5C33.8516 10.3359 29.3125 4.26562 22.9141 2.02344V32.9766C29.3125 30.7344 33.8516 24.6641 33.8516 17.5Z"
                                fill="#ED4C5C"
                            />
                            <path
                                d="M11.9766 32.9766C13.6719 33.5781 15.5312 33.9062 17.4453 33.9062C19.3594 33.9062 21.2188 33.5781 22.9141 32.9766V2.02344C21.2188 1.42188 19.4141 1.09375 17.4453 1.09375C15.4766 1.09375 13.6719 1.42188 11.9766 2.02344V32.9766Z"
                                fill="white"
                            />
                        </svg>
                        &nbsp;&nbsp;
                        <span>Language</span>
                    </div> */}
                    <div
                        className={`navbar-nav-item ${current === 1 ? 'active' : ''}`}
                        onClick={() => router.push('/')}
                    >
                        Home
                    </div>
                    <div
                        className={`navbar-nav-item ${current === 2 ? 'active' : ''}`}
                        onClick={() => router.push('/subscribe')}
                    >
                        Subscribe
                    </div>
                    <div
                        className={`navbar-nav-item ${current === 3 ? 'active' : ''}`}
                        onClick={() => router.push('contact')}
                    >
                        Contacts
                    </div>
                    <div
                        className={`navbar-nav-item ${current === 4 ? 'active' : ''}`}
                        onClick={() => router.push('about')}
                    >
                        About us
                    </div>
                </div>
            </div>
        </nav>
    );
};
NavBar.propTypes = {
    color: PropTypes.oneOf(['default', 'primary', 'white']),
    current: PropTypes.number,
};
NavBar.defaultProps = {
    color: 'default',
    current: 1,
};
