import {useState} from "react";

const testVar = {
    ironIngot: 1,
};

console.log(testVar);

const Recipes = () => {

    const [recipe, setRecipe] = useState({name: 'Peter'});

    return (
        <div>
            <h1>{recipe.name}</h1>
        </div>
    )
}

export default Recipes
