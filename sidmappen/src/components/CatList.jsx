import React, { useEffect, useState } from 'react';
import CreateCat from './CreateCat';


function CatList() {

    const getNewCat = async () => {
        return await CreateCat();
    }

    const [cats, setCats] = useState([])

    useEffect(() => {
        const getABunchOfCats = async () => {
            for (let i = 0; i < 10; i++) {
                let newCat = await getNewCat()
                let tempCats = cats

                console.log(newCat)
                tempCats.push(newCat);
                setCats([...tempCats])
            }
        }
        getABunchOfCats()
    }, []);


    return (
        <ul>
            {cats.map((cat, index) => (
                <li key={index}>
                    <img src={cat.imageLink}></img>
                    <p>{cat.name}</p>
                </li>

            ))}
        </ul>
    );
}

export default CatList;
