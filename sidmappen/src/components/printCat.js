import styled from "styled-components";

const CatImage = styled.img`
    width: 10px !important;
    height: auto;
    display: none;
`;

const printCat = (cat) => {

    return (
        <li>
            <CatImage src={cat.imageLink} />
            <h1>{cat.name}</h1>
        </li>
    )
}

export default printCat