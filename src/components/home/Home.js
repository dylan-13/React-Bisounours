import React from 'react'
import './Home.css'
import SidebarLeft from '../Sidebars/SidebarLeft'
import SidebarRight from '../Sidebars/SidebarRight'

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <SidebarLeft />
                <div className="col-8 main">
                    <h2 className='title'>Découvrez notre site</h2>
                    <br />
                    <p className='main-body'>« Il était une fois, une famille d’adorables oursons qui vivaient tout là
                        haut, au pays des arc-en-ciel et des nuages douillets, dans un royaume
                        merveilleux : Le Jardin des Bisous… Ce sont Les Bisounours. Dès que tu veux
                        partager tes sentiments avec les autres, Les Bisounours descendent des nuages
                        pour t’aider! Juste un petit coup d’œil à leur ventre tout rond, et tu découvres
                        la personnalité de chacun d’entre eux. Tous Les Bisounours sont des peluches qui
                        existent en différentes tailles et des figurines articulées pour que tu puisses
                        les aimer et les collectionner. Alors, découvre vite l’histoire de chaque
                    Bisounours! Les bisounours, pour partager petits chagrins et gros câlins. »
                    <br />
                    <br />
                        Ici, vous allez pouvoir découvrir le monde des bisounours, découvrir leur
                             histoire la date de leur création et plein d'autre chose à leur sujet, comme par
                             exemple la personne qui est à l'origine de leur créationou bien encore la ou les
                             définitionsde bisounours car oui il y en a !vous pourrez aussi profiter d'une
                             galerie d'image représentant les différents bisounours mais aussilemondedans
                         lequel ils vivent.
                    </p>
                </div>
                <SidebarRight />
            </div>
        </div>
    )
}

export default Home