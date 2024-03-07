import { team } from "../utils/team";

const TeamDetails = () => {
    return (
        <div className="bg-white w-[95%] xl:w-[55.0625rem] max-w-[55.0625rem] mx-auto pt-12 pb-16 lg:pt-6 lg:px-6 lg:pb-10 rounded-2xl xl:mb-24">
            <h2 className="text-2xl font-bold leading-5 mb-4 lg:pb-4">
                Team
            </h2>
            <p className="hidden lg:block">Nisi excepteur minim duis amet et aliquip in cupidatat anim tempor pariatur cupidatat. Reprehenderit reprehenderit nostrud duis et Lorem. Elit minim anim irure minim est eu officia eu do deserunt nostrud velit tempor.</p>
            <div className="max-w-[51.875rem]">
                {team.map((data, key) => {
                    return (
                        <div key={key} className="flex flex-col lg:flex-row m-2 items-center rounded-[0.8rem] bg-sky-100 p-4 lg:p-8 mt-5">
                            <div className="flex-shrink-0">
                                <img className="rounded w-24 h-24 lg:w-24 lg:h-24" src={data.image} alt={data.name} />
                                <div className="flex flex-col gap-1 items-center justify-center lg:ml-3 mt-4 lg:mt-2">
                                    <small className="font-semibold">{data.name}</small>
                                    <p>{data.designation}</p>
                                </div>
                            </div>

                            <p className=" lg:block p-4">{data.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamDetails;
