import React from 'react'
import '../home/Home.css'
import SidebarLeft from '../Sidebars/SidebarLeft'
import SidebarRight from '../Sidebars/SidebarRight'

const Contact = () => {

        return (
                <div className="container-fluid">
                        <div className="row">
                                <SidebarLeft />
                                <div className="col-8 main">
                                        <h2 className='title'>Contact</h2>
                                        <p className='main-body'>Ecrire ici</p>
                                </div>
                                <SidebarRight />
                        </div>
                </div>
        )
};

export default Contact