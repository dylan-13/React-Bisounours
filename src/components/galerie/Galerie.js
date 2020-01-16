import React from 'react'
import '../home/Home.css'
import SidebarLeft from '../Sidebars/SidebarLeft'
import SidebarRight from '../Sidebars/SidebarRight'

const Galerie = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <SidebarLeft />
                <div className="col-8 main">
                    <h2 className='title'>L'Histoire de la creation de notre monde</h2>
                    <p>Ecrire ici</p>
                </div>
                <SidebarRight />
            </div>
        </div>
    )
};

export default Galerie