import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
// import classNames from 'classnames';
import './App.css';

import pokemon from './assets/pokemon.png';
import pokemon1 from './assets/pokemon (1).png';
import pokemon2 from './assets/pokemon (2).png';
import pokemon3 from './assets/pokemon (3).png';
import pokemon4 from './assets/pokemon (4).png';
import pokemon5 from './assets/pokemon (5).png';

const styles = {
    container: {
       width: '100%',
    },
    flex: {
        width: 500,
        height: 110,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
    },
    col: {
        width: '33%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        top: '-300px',
    },
    move: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    pokemonBox: {
        width: '100%',
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pokemon: {
        width: 75,
        height: 75,
    },
    start: {
        width: 500,
        margin: '0 auto',
        paddingTop: 15,
        textAlign: 'right',
    },
    startBtn: {
        padding: '10px 20px',
        fontSize: 20,
        fontWeight: 600,
        color: '#fff',
        backgroundColor: '#F53E28',
        border: '4px double white',
        borderRadius: 18,
        '&:focus': {
            outline: 'none'
        },
        '&:hover': {
            color: '#F53E28',
            backgroundColor: '#fff',
            border: '4px double #F53E28',
        }
    }
};
class App extends Component {
    constructor() {
        super();
        this.bouncingFirst = React.createRef();
        this.bouncingSecond = React.createRef();
        this.bouncingThird = React.createRef();

        
    }

    handleClick = () => {
        const $this = this;

        var x = Math.floor(Math.random() * 6) * -100;
        var y = Math.floor(Math.random() * 6) * -100;
        var z = Math.floor(Math.random() * 6) * -100;

        x = this.adjustRandom(x);
        y = this.adjustRandom(y);
        z = this.adjustRandom(z);

        this.bouncingFirst.current.classList.add("bouncing");
        setTimeout(function(){ 
            $this.bouncingFirst.current.classList.remove("bouncing");
            $this.bouncingFirst.current.classList.add("bouncingToStop");
            setTimeout(function(){ 
                $this.bouncingFirst.current.classList.remove("bouncingToStop");
                $this.bouncingFirst.current.style.top = `${x}px`;
            }, 1000);
        }, 2000);

        setTimeout(function(){ 
            $this.bouncingSecond.current.classList.add("bouncing"); 
            setTimeout(function(){ 
                $this.bouncingSecond.current.classList.remove("bouncing");
                $this.bouncingSecond.current.classList.add("bouncingToStop");
                setTimeout(function(){ 
                    $this.bouncingSecond.current.classList.remove("bouncingToStop");
                    $this.bouncingSecond.current.style.top = `${y}px`;
                }, 1000);
            }, 2000);    
        }, 200);

        setTimeout(function(){ 
            $this.bouncingThird.current.classList.add("bouncing"); 
            setTimeout(function(){ 
                $this.bouncingThird.current.classList.remove("bouncing");
                $this.bouncingThird.current.classList.add("bouncingToStop");
                setTimeout(function(){ 
                    $this.bouncingThird.current.classList.remove("bouncingToStop");
                    $this.bouncingThird.current.style.top = `${z}px`;
                }, 1000);
            }, 2000);    
        }, 400);
    }

    adjustRandom = (topDis) => {
        // console.log(topDis);
        if(topDis < -250) {
            topDis = topDis + 600;
        }
        return topDis;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.flex}>
                    <div className={classes.col}>
                        <div className={classes.move} ref={this.bouncingFirst}>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon1} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon2} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon3} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon4} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon5} className={classes.pokemon} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.move} ref={this.bouncingSecond}>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon1} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon2} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon3} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon4} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon5} className={classes.pokemon} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.move} ref={this.bouncingThird}>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon1} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon2} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon3} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon4} className={classes.pokemon} alt=""></img>
                            </div>
                            <div className={classes.pokemonBox}>
                                <img src={pokemon5} className={classes.pokemon} alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.start}>
                    <button
                        type="button"
                        className={classes.startBtn}
                        onClick={this.handleClick}
                    >
                        START
                    </button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
