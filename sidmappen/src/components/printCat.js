import styled from "styled-components";

const CatImage = styled.img`
    width: 200px !important;
    height: auto;
`;

const PrintCat = (cat) => {
    console.log(cat.cat)
    return (
        <>
            <CatImage src={cat.cat.imageLink} />
            <h1>{cat.cat.name}</h1>
        </>
    )
}

export default PrintCat;