import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';



import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';


import mapMarkerImg from '../images/map_marker.svg';

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

            <Map center={[-23.5504521,-46.6344584]} zoom={15} style={{ width: '100%', height: '100%'}} > 
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className='create-orphanage'>
                <FiPlus size={32} color="#ffffff"/>
            </Link>

        </div>
    );
}

export default OrphanagesMap