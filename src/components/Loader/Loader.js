import React from 'react';

function Loader({ children, loading, error }) {
    if (loading)
        return (<div>{"Loading..."}</div>);
    else if (error)
        return (<div>{error.message || "Erreur !"}</div>);
    return (children);
}

export default Loader;