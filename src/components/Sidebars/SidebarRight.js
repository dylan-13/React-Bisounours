import React from 'react'
import Modal from 'react-responsive-modal'
import Grosbisous from '../../img/grosbisou.gif'
import Grosveinard from '../../img/grosveinard.gif'
import Groscherie from '../../img/groscherie.gif'
import Groscopain from '../../img/groscopain.gif'
import Grognon from '../../img/grognon.gif'

export default class Sidebars extends React.Component {
    state = {
        open6: false,
        open7: false,
        open8: false,
        open9: false,
        open10: false
    };

    onOpenModal6 = () => {
        this.setState({ open6: true });
    };

    onCloseModal6 = () => {
        this.setState({ open6: false });
    };

    onOpenModal7 = () => {
        this.setState({ open7: true });
    };

    onCloseModal7 = () => {
        this.setState({ open7: false });
    };

    onOpenModal8 = () => {
        this.setState({ open8: true });
    };

    onCloseModal8 = () => {
        this.setState({ open8: false });
    };

    onOpenModal9 = () => {
        this.setState({ open9: true });
    };

    onCloseModal9 = () => {
        this.setState({ open9: false });
    };

    onOpenModal10 = () => {
        this.setState({ open10: true });
    };

    onCloseModal10 = () => {
        this.setState({ open10: false });
    };


    render() {
        const { open6 } = this.state;
        const { open7 } = this.state;
        const { open8 } = this.state;
        const { open9 } = this.state;
        const { open10 } = this.state;


        return (
            <>
                <div className="col-2 side right">
                    <div className='bear'>
                        <h2 className='titleBear'>Grosbisous<img src={Grosbisous} alt="" /></h2>
                        <button className='btn' onClick={this.onOpenModal6}>Plus d'informations</button>
                        <Modal open={open6} onClose={this.onCloseModal6}>
                            <h2 className='titleBear'>Grosbisous</h2>
                            <p>
                                Nom : Grosbisous ou Tenderheart Bear (Ours au coeur tendre) ou Dounours
                        <br /><br />
                                Couleur : orange
                        <br /><br />
                                Symbole : coeur rouge
                        <br /><br />
                                Caractéristiques : Il n'hésite jamais à exprimer ses sentiments et aide les gens à dire ce qu'ils ressentent. Très affectueux, il déborde d'amour.Il est toujours heureux de faire ce que vous souhaitez, que ce soit jouer ou se reposer. Il est généralement considéré comme le chef des Bisounours et se soucie des autres. Il est aussi casse-cou. Son meilleur ami est Grognon et il aide Grojojo à prendre conscience des moments où il ne faut pas plaisanter.
                        <br /><br />
                                Sexe : masculin
                        <br /><br />
                                Devise :Personne ne se soucie des autres comme un ours !
                        </p>
                        </Modal>
                    </div>
                    <div className='bear'>
                        <h2 className='titleBear'>Grosveinard<img src={Grosveinard} alt="" /></h2>
                        <button className='btn' onClick={this.onOpenModal7}>Plus d'informations</button>
                        <Modal open={open7} onClose={this.onCloseModal7}>
                            <h2 className='titleBear'>Grosveinard</h2>
                            <p>
                                Nom : Grosveinard ou Goodluck Bear (Ours de la chance) ou Chançour
                        <br /><br />
                                Couleur : vert
                        <br /><br />
                                Symbole : trèfle à quatre feuilles
                        <br /><br />
                                Caractéristiques : Il a toujours de la chance et en fait profiter les autres. Si vous êtes en manque de veine, appelez-le ! Toujours heureux et plein d’assurance, il est doué pour réparer les machines.
                        <br /><br />
                                Sexe : masculin
                        <br /><br />
                                Devise : Veinards, je suis là pour vous !
                        </p>
                        </Modal>
                    </div>
                    <div className='bear'>
                        <h2 className='titleBear'>Groscherie<img src={Groscherie} alt="" /></h2>
                        <button className='btn' onClick={this.onOpenModal8}>Plus d'informations</button>
                        <Modal open={open8} onClose={this.onCloseModal8}>
                            <h2 className='titleBear'>groscherie</h2>
                            <p>
                                Nom : Groschéri ou Love-a-lot Bear (Ours qui aime beaucoup) ou Cupinours
                        <br /><br />
                                Couleur : rose
                        <br /><br />
                                Symbole : deux coeurs entrelacés
                        <br /><br />
                                Caractéristiques : Très gaie, elle est sentimentale et aide à résoudre les problèmes amoureux. Elle aime aussi aider à créer des couples. Son meilleur ami est Groscopain.
                        <br /><br />
                                Sexe : féminin
                        <br /><br />
                                Devise : L’amour trouvera une voie et, s’il ne le fait pas, je le ferai.
                        </p>
                        </Modal>
                    </div>
                    <div className='bear'>
                        <h2 className='titleBear'>Groscopain<img src={Groscopain} alt="" /></h2>
                        <button className='btn' onClick={this.onOpenModal9}>Plus d'informations</button>
                        <Modal open={open9} onClose={this.onCloseModal9}>
                            <h2 className='titleBear'>Groscopain</h2>
                            <p>
                                Nom : Groscopain ou Friend Bear (Ours ami) ou Copinours
                        <br /><br />
                                Couleur : orange
                        <br /><br />
                                Symbole : deux fleurs
                        <br /><br />
                                Caractéristiques : C'est l'amie par excellence. Elle est toujours prête à se dévouer pour ses amis et peut aider à s'en faire. Très bavarde, elle est rarement calme. Sa meilleure amie est Groschéri.
                        <br /><br />
                                Sexe : féminin
                        <br /><br />
                                Devise : : J'ai un ami pour nous !
                        </p>
                        </Modal>
                    </div>
                    <div className='bear'>
                        <h2 className='titleBear'>Grognon<img src={Grognon} alt="" /></h2>
                        <button className='btn' onClick={this.onOpenModal10}>Plus d'informations</button>
                        <Modal open={open10} onClose={this.onCloseModal10}>
                            <h2 className='titleBear'>Grognon</h2>
                            <p>
                                Nom : Grognon ou Grumpy Bear (Ours grognon) ou Grognours
                        <br /><br />
                                Couleur : bleu
                        <br /><br />
                                Symbole : un nuage de pluie avec des gouttes de pluie en forme de coeur
                        <br /><br />
                                Caractéristiques : Pessimiste, il est toujours triste, ronchonne souvent et pense que personne ne le comprend. D'ailleurs, il lui arrive toujours pleins de petits malheurs, notamment à cause de sa maladresse, et les choses ne vont jamais comme il veut. Mais il sait mettre de côté son mauvais caractère pour venir en aide à ses amis. Son meilleur ami est Grosjojo et il supporte difficilement la chance insolente de Grosveinard.
                        <br /><br />
                                Sexe : masculin
                        <br /><br />
                                Devise: Je ne suis pas fou, je suis grognon
                        </p>
                        </Modal>
                    </div>
                </div>
            </>)
    }
};