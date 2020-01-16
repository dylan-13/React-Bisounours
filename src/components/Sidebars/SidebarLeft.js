import React from 'react'
import Modal from 'react-responsive-modal'
import Grostaquin from '../../img/grostaquin.gif'
import Grosfarceur from '../../img/grosfarceur.gif'
import Grosjojo from '../../img/grosjojo.gif'
import Grosdodo from '../../img/grosdodo.gif'
import Grosgateau from '../../img/grosgateau.gif'

export default class Sidebars extends React.Component {
    state = {
        open1: false,
        open2: false,
        open3: false,
        open4: false,
        open5: false,
    };

    onOpenModal1 = () => {
        this.setState({ open1: true });
    };

    onCloseModal1 = () => {
        this.setState({ open1: false });
    };

    onOpenModal2 = () => {
        this.setState({ open2: true });
    };

    onCloseModal2 = () => {
        this.setState({ open2: false });
    };

    onOpenModal3 = () => {
        this.setState({ open3: true });
    };

    onCloseModal3 = () => {
        this.setState({ open3: false });
    };

    onOpenModal4 = () => {
        this.setState({ open4: true });
    };

    onCloseModal4 = () => {
        this.setState({ open4: false });
    };

    onOpenModal5 = () => {
        this.setState({ open5: true });
    };

    onCloseModal5 = () => {
        this.setState({ open5: false });
    };

    render() {
        const { open1 } = this.state;
        const { open2 } = this.state;
        const { open3 } = this.state;
        const { open4 } = this.state;
        const { open5 } = this.state;

        return (
            <>
                    <div className="col-2 side left">
                        <div className='bear'>
                            <h2 className='titleBear'>Grostaquin<img src={Grostaquin} alt="" /></h2>
                            <button className='btn' onClick={this.onOpenModal1}>Plus d'informations</button>
                            <Modal open={open1} onClose={this.onCloseModal1}>
                                <h2 className='titleBear'>Grostaquin</h2>
                                <p>
                                    Nom : Grostaquin ou Wish Bear (Ours des Souhaits) ou Désirours
                        <br /><br />
                                    Couleur : vert
                        <br /><br />
                                    Symbole : étoile filante
                        <br /><br />
                                    Caractéristiques : Timide, elle croit que nos voeux peuvent se réaliser. Elle aide d'ailleurs à ce que ceux d'autrui se concrétisent. Mais la réalisation de tous nos souhaits peut-elle vraiment nous rendre heureux ? Sa meilleure amie est Grofarceur. Grosveinard la taquine souvent en lui disant que c’est lui le plus chanceux.
                        <br /><br />
                                    Sexe : féminin
                        <br /><br />
                                    Devise: Votre souhait est le mien !
                        </p>
                            </Modal>
                        </div>
                        <div className='bear'>
                            <h2 className='titleBear'>Grosfarceur<img src={Grosfarceur} alt="" /></h2>
                            <button className='btn' onClick={this.onOpenModal2}>Plus d'informations</button>
                            <Modal open={open2} onClose={this.onCloseModal2}>
                                <h2 className='titleBear'>Grosfarceur</h2>
                                <p>
                                    Nom : Grosfarceur ou Cheer Bear (Ours acclamé) ou Gailourson
                        <br /><br />
                                    Couleur : rose
                        <br /><br />
                                    Symbole : arc en ciel
                        <br /><br />
                                    Caractéristiques : Très heureuse, elle incarne l'espoir que les choses ne peuvent que s'améliorer. Elle est toujours prête à encourager les autres. Elle est toujours prête à encourager les autres et à écouter leurs confidences. Un peu téméraire, elle pense que « rien n’est impossible ». De temps en temps, elle parle en rimes. Sa meilleure amie est Grostaquin et elle essaye souvent de faire rire Grognon.
                        <br /><br />
                                    Sexe : féminin
                        <br /><br />
                                    Devise: Quand vous doutez, souriez !
                        </p>
                            </Modal>
                        </div>
                        <div className='bear'>
                            <h2 className='titleBear'>Grosjojo<img src={Grosjojo} alt="" /></h2>
                            <button className='btn' onClick={this.onOpenModal3}>Plus d'informations</button>
                            <Modal open={open3} onClose={this.onCloseModal3}>
                                <h2 className='titleBear'>Grosjojo</h2>
                                <p>
                                    Nom : Grosjojo ou Funshine Bear (Ours d'amusement qui brille) ou Solours
                        <br /><br />
                                    Couleur : jaune
                        <br /><br />
                                    Symbole : soleil souriant
                        <br /><br />
                                    Caractéristiques : Il est toujours de bonne humeur et adore faire la fête. C'est un optimiste qui a sans cesse le mot pour rire et il aide à apprendre à s'amuser. Avec lui, tout devient un jeu.Vrai clown, il adore jouer et connaît d’ailleurs tous les jeux. Il sait reproduire n’importe quel son. Distrait, son humour n’est toujours drôle et il vexe parfois ses amis sans le faire exprès. En 2007, dans Oopsy does it !, il apparaît avec une casquette de base-ball. Son meilleur ami est Grognon et il connaît un secret au sujet de Groscadeau.
                        <br /><br />
                                    Sexe : masculin... mais à l'origine féminin...
                        <br /><br />
                                    Devise : Le divertissement commence ici !
                        </p>
                            </Modal>
                        </div>
                        <div className='bear'>
                            <h2 className='titleBear'>Grosdodo<img src={Grosdodo} alt="" /></h2>
                            <button className='btn' onClick={this.onOpenModal4}>Plus d'informations</button>
                            <Modal open={open4} onClose={this.onCloseModal4}>
                                <h2 className='titleBear'>Grosdodo</h2>
                                <p>
                                    Nom : Grosdodo ou Bedtime Bear (Ours de l'heure du coucher) ou Dodonours
            
                                    Couleur : bleu
            
                                    Symbole : croissant de lune auquel est accroché une étoile
            
                                    Caractéristiques :
            
                                    Il aime dormir et somnole toute la journée alors qu’il se montre éveillé et courageux la nuit. Il veille à ce que nos nuits soient paisibles et nos rêves agréables. Sa meilleure amie est Grostaquin et il aide Groscopain à ne plus craindre l’obscurité.
            
                                    Sexe : masculin
            
                                    Devise :Dormir est ce que je fais de mieux.
                        </p>
                            </Modal>
                        </div>
                        <div className='bear'>
                            <h2 className='titleBear'>Grosgateau<img src={Grosgateau} alt="" /></h2>
                            <button className='btn' onClick={this.onOpenModal5}>Plus d'informations</button>
                            <Modal open={open5} onClose={this.onCloseModal5}>
                                <h2 className='titleBear'>Grosgateau</h2>
                                <p>
                                    Nom : Grosgâteau ou Birthday Bear (Ours de l'anniversaire) ou Fêtalours
                        <br /><br />
                                    Couleur : orange
                        <br /><br />
                                    Symbole : gâteau
                        <br /><br />
                                    Caractéristiques : Elle aime la nourriture et particulièrement les sucreries. Grande gourmande, elle organise les repas des fêtes et spécialement les anniversaires. Elle adore s’amuser lors de fêtes.
                        <br /><br />
                                    Sexe : féminin
                        </p>
                            </Modal>
                        </div>
                        </div>
            </>)
    }
};