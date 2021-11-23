import React from 'react';
import PropTypes from 'prop-types';

export const SideBar = (props) => {
    let { contents } = props;
    const [hash, setHash] = React.useState('');
    React.useEffect(() => {
        setHash(window.location.hash);
    }, []);
    return (
        <div className="side-bar p-15">
            <div className="text-danger pb-10 t-20 text-bold">On this page</div>
            {contents.map(
                /**
                 * @param {{url: string, title: string}} item
                 * @returns
                 */
                (item) => (
                    <div
                        onClick={() => setHash(item.url)}
                        className={`side-item ${hash === item.url ? 'active' : ''}`}
                        key={item.url}
                    >
                        <a href={item.url}>{item.title}</a>
                    </div>
                )
            )}
        </div>
    );
};
SideBar.propTypes = {
    contents: PropTypes.array,
};
SideBar.defaultProps = {
    contents: [],
};
