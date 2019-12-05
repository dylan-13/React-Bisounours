import React from 'react';
import Modal from 'react-responsive-modal';
import Grostaquin from '../../img/grostaquin.gif'
import Grosfarceur from '../../img/grosfarceur.gif'
import Grosjojo from '../../img/grosjojo.gif'
import Grosdodo from '../../img/grosdodo.gif'
import Grosgateau from '../../img/grosgateau.gif'
import Grosbisous from '../../img/grosbisou.gif'
import Grosveinard from '../../img/grosveinard.gif'
import Groscherie from '../../img/groscherie.gif'
import Groscopain from '../../img/groscopain.gif'
import Grognon from '../../img/grognon.gif'
import './Home.css'

export default class Home extends React.Component {
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    render() {
        const {open} = this.state;

        return ( 
        <>
         <div className="row-12"></div> < div className = "container-fluid" > <div className="row">
            <div className="col-2 side left">
                <div className='bear'>
                    <a href="grostaquin.html">Grostaquin<img src={Grostaquin} alt=""/></a>
                    <button onClick={this.onOpenModal}>Open modal</button>
                    <Modal open={open} onClose={this.onCloseModal}>
                        <h2>Simple centered modal</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
                            non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
                            porttitor quam.
                        </p>
                    </Modal>
                </div>
                <div className='bear'>
                    <a href="grosfarceur.html">Grosfarceur<img src={Grosfarceur} alt=""/></a>
                </div>
                <div className='bear'>
                    <a href="grosjojo.html">Grosjojo<img src={Grosjojo} alt=""/></a>
                </div>
                <div className='bear'>
                    <a href="grosdodo.html">Grosdodo<img src={Grosdodo} alt=""/></a>
                </div>
                <div className='bear'>
                    <a href="grosgateau.html">Grosgateau<img src={Grosgateau} alt=""/></a>
                </div>
            </div>
            <div className="col-8 main">
                <h2 className='title'>Découvrez notre site</h2>
                <br/>
                <p>«Il était une fois, une famille d’adorables oursons qui vivaient tout là
                    haut, au pays des arc-en-ciel et des nuages douillets, dans un royaume
                    merveilleux : Le Jardin des Bisous… Ce sont Les Bisounours. Dès que tu veux
                    partager tes sentiments avec les autres, Les Bisounours descendent des nuages
                    pour t’aider! Juste un petit coup d’œil à leur ventre tout rond, et tu découvres
                    la personnalité de chacun d’entre eux. Tous Les Bisounours sont des peluches qui
                    existent en différentes tailles et des figurines articulées pour que tu puisses
                    les aimer et les collectionner. Alors, découvre vite l’histoire de chaque
                    Bisounours! Les bisounours, pour partager petits chagrins et gros câlins.»</p>
                <br/>
                <p>Ici, vous allez pouvoir découvrir le monde des bisounours, découvrir leur
                    histoire la date de leur création et plein d'autre chose à leur sujet, comme par
                    exemple la personne qui est à l'origine de leur créationou bien encore la ou les
                    définitionsde bisounours car oui il y en a !vous pourrez aussi profiter d'une
                    galerie d'image représentant les différents bisounours mais aussilemondedans
                    lequel ils vivent.</p>
                <br/>
                <p>Ps: pensez à aller sur les liens cliquable en bas de la page (android et ios
                    pour télécharger l'application) (Youtube pour découvrir la chaîne des
                    bisounours) (le shop pour découvrir la boutique). Nous avons mis du nôtre pour
                    la création de ce site, alors nous espérons qu'il vous conviendra .</p>
            </div>
            <div className="col-2 side right">
                <div className='bear'>
                    <a href="grosbisous.html">Grosbisous<img src={Grosbisous} alt=""/></a>
                </div>
                <div className='bear'>
                    <a href="grosveinard.html">Grosveinard<img src={Grosveinard} alt=""/></a>
                </div>
                <div className='bear'>
                    <a href="groscherie.html">Groscherie<img src={Groscherie} alt=""/></a>
                </div>
                <div className='bear'>
                    <a href="groscopain.html">Groscopain<img src={Groscopain} alt=""/></a>
                </div>
                <div className='bear'>
                    <a href="grognon.html">Grognon<img src={Grognon} alt=""/></a>
                </div>
            </div>
        </div> 
      </div>
</>)}};
