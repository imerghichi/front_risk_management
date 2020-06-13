import React from 'react';

function Loader({ children, loading, error, noData }) {
    if (loading)
        return (<div>{"Loading..."}</div>);
    else if (noData)
        return (<div>{"Aucune entrée à afficher!"}</div>)
    else if (error)
        return (<div>{error.message || "Erreur !"}</div>);
    return (children);
}

export default Loader;