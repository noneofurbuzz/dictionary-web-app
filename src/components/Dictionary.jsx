export function Dictionary(prop){
    let audio = new Audio((prop.dict.phoneticsAudio == "" || prop.dict.phoneticsAudio == null) ? prop.dict.phoneticsAudio1 : prop.dict.phoneticsAudio)
    return(
        <div>
        <div className="flex items-center justify-between mt-9 w-120 break-all">
        <div className="">
        <p className={`${prop.dark ? "text-white" : "text-black"} text-6xl  duration-700 transition-all font-bold`}>{prop.dict.word}</p>
        {(prop.dict.phoneticsText != "" || prop.dict.phoneticsText1 != "") && <p className="text-purple -mt-2 break-all text-2.5xl">{((prop.dict.phoneticsText == "" || prop.dict.phoneticsText == null) ? prop.dict.phoneticsText1 : prop.dict.phoneticsText)}</p>}
        </div>
        <div>
        {(prop.dict.phoneticsAudio != "" || prop.dict.phoneticsAudio1 != "") &&  <svg onClick={() => audio.play()} className = "cursor-pointer fill-svg-1 hover:fill-white transition-all hover:bg-purple-1 active:fill-white active:bg-purple rounded-full" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>}
        </div>
        </div>
        {prop.store.meanings != null && prop.store.meanings.map((part,index) => {
            return(
                <div key={index}>
                <div className={`flex items-center mt-12 ${prop.dark ? "text-white" : "text-black"}`}>
                <p className="italic font-bold text-2xl duration-700">{part.partOfSpeech}</p>
                <div className={`border-t-1 w-full ml-4 duration-700 ${prop.dark ? "border-dark-gray":"border-light-gray"}`}></div>
                </div>
                <p className="text-gray mt-8 text-xl">Meaning</p>
                {part.definitions != null && part.definitions.map((definitions,index) => {
                return(
                     <ul key={index} className={`list-disc mt-3 ${prop.dark ? "text-white" : "text-black-gray"} marker:text-purple text-lg list-outside`}>
                       <li className="duration-700 ml-10 text-left">{definitions.definition}</li>
                       {definitions.example != null && <li className="text-gray mt-1 marker:text-transparent text-lg ml-10">&quot;{definitions.example}&quot;</li>}
                    </ul>)
                    })}
                </div>
            )})
        }
        </div>
    )}