
import images  from "../Images/index";
import Image from "next/image";

export default({
    setOpenProfile,
    setCompleteModal,
    setGetModal,
    setStartModal,

})=>{
    const team = [
        {
            avatar:images.compShipment,

        },
        {
            avatar:images.getShipment,
        },
        {
            avatar: images.startShipment,
        },
        {
            avatar:images.userProfile,
        },
        {
            avatar:images.shipCount,
        },
        {
            avatar: images.send,
        },
    ];

    const openModelBox =(text)=>{
        if(text===1){
            setCompleteModal(true);
        }
        else if(text===2){
            setGetModal(true);
        }
        else if(text===3){
            setStartModal (true);
        }
        else if (text === 4){
           setOpenProfile(true); 
        }

    };
    // jsx writting
    return(
        <section className="mx-10 pb-10  ">
            <div className="max-w-screen-xl mx-autopx-4 md:px-8 ">
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 
                    md:grid-cols-3 ">
                        {team.map((item,i)=>(
                            <li key={i}>
                                <div onClick={()=>openModelBox(i+1)}
                                className="w-full h-60 sm:h-52 md:h-56"
                                >
                                <Image
                                src={item.avatar}
                                className="w-full h-full flex justify-between object-cover object-center
                                rounded-2xl  hover:scale-75 duration-100 shadow-2xl"
                                alt="do refresh it"
                                />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};