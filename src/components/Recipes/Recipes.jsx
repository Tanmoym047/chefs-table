import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cook from "../Cook/Cook";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipies = () => {


    const [recipies, setRecipies] = useState([]);
    const [cooks, setCooks] = useState([]);
    const [cook, setCook] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipies(data))
    }, []);

    const handleWantToCook = (cook) => {
        let check = 0;
        const tempCook = [...cooks];
        for (const temp of tempCook) {
            if (temp.recipe_id === cook.recipe_id) {
                check = 1;
            }
        }
        if (check === 0) {
            const newCook = [...cooks, cook];
            setCooks(newCook);
        }
        else {
            toast("Already exists!");
        }

    }

    const handlePrepareCook = (id) => {
        // console.log(id);
        const newCook = cooks.find(x => x.recipe_id === id.recipe_id);
        setCook([...cook, newCook]);
        const newCooks = cooks.filter(x => x.recipe_id !== id.recipe_id);
        setCooks(newCooks);
    }

    return (
        <div className="container mx-auto mt-12">
            <div className="text-center font-lexend space-y-3">
                <h2 className="font-semibold text-4xl">Our Recipes</h2>
                <p className="">Indulge your palate with our signature marinating tender chicken breasts in a zesty <br /> blend of freshly  squeezed lemon juice, minced garlic, and fragrant herbs like rosemary and thyme.</p>
            </div>

            <div className="flex flex-col-reverse lg:flex-row mt-12 gap-10
            ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    {
                        recipies.map(recipe => <Recipe recipe={recipe} handleWantToCook={handleWantToCook}></Recipe>)
                    }
                </div>
                <div className="flex-1">
                    <Cook cooks={cooks} handlePrepareCook={handlePrepareCook} cook={cook}></Cook>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Recipies;