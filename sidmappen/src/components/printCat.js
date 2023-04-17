const printCat = (cat) => {

    return (
        <li>
            <img src={cat.imageLink} />
            <p>{cat.name}</p>
        </li>
    )
}

export default printCat