import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe, handleWantToCook }) => {
    const { recipe_image, recipe_id, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl p-4 border">
                <figure><img src={recipe_image} alt="Shoes" /></figure>
                <div className="card-body space-y-2">
                    <h2 className="font-semibold font-lexend text-xl">{recipe_name}</h2>
                    <p className="font-fira opacity-80">{short_description}</p>
                    <div className="border-t border-b space-y-2 pt-2 pb-2">
                        <h3 className="font-medium       text-lg">Ingredients: {ingredients.length}</h3>
                        <div>
                            <ul className="font-fira opacity-80">
                                {ingredients.map(ingredient => <li>{ingredient}</li>)}
                            </ul>
                        </div>
                    </div>


                    <div className="font-fira opacity-80 flex justify-left gap-4">
                        <div className="flex gap-2 items-center">
                            <CiClock2 /><p>{preparing_time} minutes</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaFire /><p>{calories} Calories</p>
                        </div>
                    </div>

                    <div className="card-actions ">
                        <button onClick={() => handleWantToCook(recipe)} className="btn btn-accent rounded-3xl">Want To Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;