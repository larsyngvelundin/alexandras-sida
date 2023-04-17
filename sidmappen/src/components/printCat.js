const printCat = (cat) => {

    return (
        <li>
            <img src={cat.imageLink} />
            <h1>{cat.name}</h1>
        </li>
    )
}

export default printCat