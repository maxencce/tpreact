import React, { useState } from 'react'
import Beer from './Beer'
import { IoMdAdd } from "react-icons/io";
import './BeerList.css'

interface Props {

}

const BeerList: React.FunctionComponent<Props> = (props: Props) => {

    // Etat pour suivre la liste des bières
    const [beers, setBeers] = useState<string[]>([
        'Heineken',
        'Grolsch',
        'Corona'
    ]);

    // État pour suivre la valeur de l'input
    const [newBeerName, setNewBeerName] = useState<string>('');

    // Fonction pour ajouter une bière
    const addBeer = () => {
        if (newBeerName.trim() !== '') {
            setBeers([...beers, newBeerName]);
            setNewBeerName('');
        }
    }

    // Fonction pour supprimer une bière
    const handleRemoveBeer = (beerName: string) => {
        setBeers(prevBeers => prevBeers.filter(b => b !== beerName));
    }

    return (
        <div id='beer-list-div'>
            <div id='input-div'>
                <input
                    type="text"
                    value={newBeerName}
                    onChange={(e) => setNewBeerName(e.target.value)}
                    placeholder="Enter beer name"
                />
                <button id='add-button' onClick={addBeer}><IoMdAdd /></button>
            </div>

            {beers.map((beer, index) => {
                const removeBeer = () => {
                    handleRemoveBeer(beer);
                }

                return <Beer onDelete={removeBeer} key={index} name={beer} />
            })}
        </div>
    )
}

export default BeerList