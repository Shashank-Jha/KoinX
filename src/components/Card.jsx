
const Card = ({ startColor, endColor, title }) => {
    let divClass = "";
    if (startColor == "red")
        divClass = `w-100 p-5 mx-4 mt-4 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-red-400 to-orange-600`;
    else
        divClass = `w-100 p-5 mx-4 mt-4 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-green-400 to-cyan-600`;
    return (
        <div className={divClass}>
            <div className="flex gap-4">
                <div className="w-1/3 rounded-full">
                    <img
                        className="w-full h-full "
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9K5M3A_Npytuxspxk1QiToF8ohq8yS2cS2qE48mZ96OIe8Ph5hZSkOlikoYa-Ierxuk"
                        alt="Placeholder"
                    />
                </div>
                <div className="w-2/3 p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                    <button className="bg-white text-slate-600 py-1 px-2 rounded-md shadow-sm ">
                        Check Now ➡
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
