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
        open1: false,
        open2: false,
        open3: false,
        open4: false,
        open5: false,
        open6: false,
        open7: false,
        open8: false,
        open9: false,
        open10: false
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
        const { open1 } = this.state;
        const { open2 } = this.state;
        const { open3 } = this.state;
        const { open4 } = this.state;
        const { open5 } = this.state;
        const { open6 } = this.state;
        const { open7 } = this.state;
        const { open8 } = this.state;
        const { open9 } = this.state;
        const { open10 } = this.state;


        return (
            <>
            < div className="container-fluid"> 
                <div className="row">
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
                    <div className="col-8 main">
                        <h2 className='title'>Découvrez notre site</h2>
                        <br />
                        <p>«Il était une fois, une famille d’adorables oursons qui vivaient tout là
                            haut, au pays des arc-en-ciel et des nuages douillets, dans un royaume
                            merveilleux : Le Jardin des Bisous… Ce sont Les Bisounours. Dès que tu veux
                            partager tes sentiments avec les autres, Les Bisounours descendent des nuages
                            pour t’aider! Juste un petit coup d’œil à leur ventre tout rond, et tu découvres
                            la personnalité de chacun d’entre eux. Tous Les Bisounours sont des peluches qui
                            existent en différentes tailles et des figurines articulées pour que tu puisses
                            les aimer et les collectionner. Alors, découvre vite l’histoire de chaque
                    Bisounours! Les bisounours, pour partager petits chagrins et gros câlins.»</p>
                        <br />
                        <p>Ici, vous allez pouvoir découvrir le monde des bisounours, découvrir leur
                            histoire la date de leur création et plein d'autre chose à leur sujet, comme par
                            exemple la personne qui est à l'origine de leur créationou bien encore la ou les
                            définitionsde bisounours car oui il y en a !vous pourrez aussi profiter d'une
                            galerie d'image représentant les différents bisounours mais aussilemondedans
                    lequel ils vivent.</p>
                        <br />
                        <p>Ps: pensez à aller sur les liens cliquable en bas de la page (android et ios
                            pour télécharger l'application) (Youtube pour découvrir la chaîne des
                            bisounours) (le shop pour découvrir la boutique). Nous avons mis du nôtre pour
                    la création de ce site, alors nous espérons qu'il vous conviendra .</p>
                    </div>
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
                </div>
            </div>
            </>)
    }
};
