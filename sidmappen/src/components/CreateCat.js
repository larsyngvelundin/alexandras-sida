const catNames = require('cat-names');


const CreateCat = async () => {
    let catApi = "live_YAOKtB1IBLxbphqQZeLwtXzNRrkaTbBeIzXUw3bZ9SPNJcqysLVmcnCOCGpM3z3c"
    let name = catNames.random()
    const getRandomKittenImage = async () => {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=${catApi}`);
            const data = await response.json();
            const imageUrl = data[0].url;
            //console.log(imageUrl);
            return imageUrl
        } catch (error) {
            console.error("Error fetching random kitten image:", error);
        }
    };

    let imageLink = await getRandomKittenImage();
    // //console.log(imageLink)
    let catObject = {'name': name, 'imageLink': imageLink}
    return catObject
}

export default CreateCat