import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import mapMarkerImg from '../images/map_marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap()
{
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperado sua vista :)</p>
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <span>SP</span>
                </footer>
            </aside>

            <div>Mapa</div>

            <Link to="" className='create-orphanage'>
                <FiPlus size={32} color="#ffffff"/>
            </Link>

        </div>
    );
}

export default OrphanagesMap