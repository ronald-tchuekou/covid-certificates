import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import DOMAnimation from '../scripts/slide_animations';

export const NavBar = (props) => {
    const nav_ref = React.useRef(null);

    const { color, current } = props;

    const [show, setShow] = React.useState(false);
    const [current_page, setCurrentPage] = React.useState('');

    const router = useRouter();

    React.useEffect(() => {
        setCurrentPage(window.location.pathname);
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
                    <div
                        className={`navbar-nav-item ${current_page === '/' ? 'active' : ''}`}
                        onClick={() => router.push('/')}
                    >
                        Home
                    </div>
                    <div
                        className={`navbar-nav-item ${current_page === '/subscribe' ? 'active' : ''}`}
                        onClick={() => router.push('subscribe')}
                    >
                        Subscribe
                    </div>
                    <div
                        className={`navbar-nav-item ${current_page === '/contact' ? 'active' : ''}`}
                        onClick={() => router.push('contact')}
                    >
                        Contacts
                    </div>
                    <div
                        className={`navbar-nav-item ${current_page === '/about' ? 'active' : ''}`}
                        onClick={() => router.push('about')}
                    >
                        About us
                    </div>
                    <div
                        className={`navbar-nav-item ${current_page === '/support' ? 'active' : ''}`}
                        onClick={() => router.push('support')}
                    >
                        Support us
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
                    <div
                        className={`navbar-nav-item ${current_page === '/' ? 'active' : ''}`}
                        onClick={() => router.push('/')}
                    >
                        Home
                    </div>
                    <div
                        className={`navbar-nav-item ${current_page === '/subscribe' ? 'active' : ''}`}
                        onClick={() => router.push('subscribe')}
                    >
                        Subscribe
                    </div>
                    <div
                        className={`navbar-nav-item ${current_page === '/contact' ? 'active' : ''}`}
                        onClick={() => router.push('contact')}
                    >
                        Contacts
                    </div>
                    <div
                        className={`navbar-nav-item ${current_page === '/about' ? 'active' : ''}`}
                        onClick={() => router.push('about')}
                    >
                        About us
                    </div>
                    <div
                        className={`navbar-nav-item ${current_page === '/support' ? 'active' : ''}`}
                        onClick={() => router.push('support')}
                    >
                        Support us
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
