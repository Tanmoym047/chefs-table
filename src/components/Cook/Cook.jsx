/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cook = ({ cooks, handlePrepareCook, cook }) => {

    let time = 0;
    let calorie = 0;
    cook.map(id => {
        time += parseInt(id.preparing_time);
        calorie += parseInt(id.calories);
    })
    return (
        <div className="border w-full text-center rounded-xl">
            {/* want to cook */}
            <h2 className="border-b font-lexend font-bold text-2xl pt-6 pb-6">Want To Cook: {cooks.length}</h2>
            {/* table */}
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cooks.map(cook =>
                                <tr>
                                    <td>{cook.recipe_id}</td>
                                    <td>{cook.recipe_name}</td>
                                    <td>{cook.preparing_time}</td>
                                    <td>{cook.calories}</td>
                                    <td><button onClick={() => handlePrepareCook(cook)} className="btn rounded-3xl btn-accent w-full mt-2">Preparing</button></td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>


            {/* Currently Cooking */}
            <h2 className="border-b font-lexend font-bold text-2xl pt-6 pb-6">Currently Cooking: {cook.length}</h2>
            {/* table */}
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cook.map(cook =>
                                <tr>
                                    <td>{cook.recipe_id}</td>
                                    <td>{cook.recipe_name}</td>
                                    <td>{cook.preparing_time}</td>
                                    <td>{cook.calories}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

            <div className="flex gap-4 justify-end font-lexend font-bold mt-4 mb-4 pr-4">
                <h3>Total Time: {time} minutes</h3>
                <h3>Total Calories: {calorie} calories</h3>
            </div>
        </div>
    );
};

export default Cook;