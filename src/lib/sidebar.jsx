import React, { useState } from 'react';
import './Sidebar.css'; // Estilos para los desplegables

function Sidebar({ updateContent }) {
    const [abiertoABM, setAbiertoABM] = useState(false);
    const [abiertoPedidos, setAbiertoPedidos] = useState(false);
    const [abiertoGestionar, setAbiertoGestionar] = useState(false);
    const [abiertoAgregar, setAbiertoAgregar] = useState(false);

    const toggleABM = () => setAbiertoABM(!abiertoABM);
    const togglePedidos = () => setAbiertoPedidos(!abiertoPedidos);
    const toggleGestionar = () => setAbiertoGestionar(!abiertoGestionar);
    const toggleAgregar = () => setAbiertoAgregar(!abiertoAgregar);

    return (
        <div className="base-navbar">
            <div className="windows">
                <div className="windows-btn">
                    <button><h3>Pañol</h3></button>
                    <button><h3>Académicas</h3></button>
                </div>

                <div className="dropdown">
                    <h4
                        onClick={toggleABM}
                        className={`dropdown-header ${abiertoABM ? 'open' : ''}`}
                    >
                        ABM {abiertoABM ? '-' : '+'}
                    </h4>
                    {abiertoABM && (
                        <div className="dropdown-content">
                            <a href="/abm/index.js" onClick={() => updateContent('Contenido ABM')}>Enlace ABM</a>

                            <h4
                                onClick={toggleGestionar}
                                className={`dropdown-subheader ${abiertoGestionar ? 'open' : ''}`}
                            >
                                Gestionar {abiertoGestionar ? '-' : '+'}
                            </h4>
                            {abiertoGestionar && (
                                <div className="dropdown-subcontent">
                                    <a href="#" onClick={() => updateContent('Contenido Gestion')}>Gestionar herramientas y consumibles</a>
                                    <a href="#" onClick={() => updateContent('Contenido Gestion')}>Gestionar categoría, subcategoría y tipo</a>
                                </div>
                            )}

                            <h4
                                onClick={toggleAgregar}
                                className={`dropdown-subheader ${abiertoAgregar ? 'open' : ''}`}
                            >
                                Agregar {abiertoAgregar ? '-' : '+'}
                            </h4>
                            {abiertoAgregar && (
                                <div className="dropdown-subcontent">
                                    <a href="#" onClick={() => updateContent('Contenido Agregar')}>Agregar Herramientas</a>
                                    <a href="#" onClick={() => updateContent('Contenido Agregar')}>Agregar Consumibles</a>
                                </div>
                            )}
                        </div>
                    )}

                    <h4
                        onClick={togglePedidos}
                        className={`dropdown-header ${abiertoPedidos ? 'open' : ''}`}
                    >
                        Pedidos {abiertoPedidos ? '-' : '+'}
                    </h4>
                    {abiertoPedidos && (
                        <div className="dropdown-content">
                            <a href="#" onClick={() => updateContent('Contenido Pedidos')}>Enlace Pedidos</a>
                        </div>
                    )}
                </div>
            </div>
            <div className='closeModal'>
                <button>hola</button>
            </div>
        </div>
    );
}

export default Sidebar;
