export function Dictionary(prop){
    let audio = new Audio((prop.dict.phoneticsAudio == "" || prop.dict.phoneticsAudio == null) ? prop.dict.phoneticsAudio1 : prop.dict.phoneticsAudio)
    return(
        <>
        {prop.found && <div>
        <div className="flex items-center justify-between mt-9 md-1:w-120 w-full break-all">
        <div className="">
        <p className={`${prop.dark ? "text-white" : "text-black"} 500:text-6xl text-3 duration-700 transition-all font-bold`}>{prop.dict.word}</p>
        {(prop.dict.phoneticsText != "" || prop.dict.phoneticsText1 != "") && <p className="text-purple -mt-2 break-all 500:text-2.5xl text-xl-1">{((prop.dict.phoneticsText == "" || prop.dict.phoneticsText == null) ? prop.dict.phoneticsText1 : prop.dict.phoneticsText)}</p>}
        </div>
        <div>
        {(prop.dict.phoneticsAudio != "" || prop.dict.phoneticsAudio1 != "") &&  <svg onClick={() => audio.play()} className = "cursor-pointer fill-svg-1 w-14 500:w-20 hover:fill-white transition-all hover:bg-purple-1 active:fill-white active:bg-purple rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75"><g fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>}
        </div>
        </div>
        {prop.store.meanings != null && prop.store.meanings.map((part,index) => {
            return(
                <div key={index}>
                <div className={`flex items-center mt-12 ${prop.dark ? "text-white" : "text-black"}`}>
                <p className="italic font-bold  text-xl 500:text-2xl duration-700">{part.partOfSpeech}</p>
                <div className={`border-t-1 w-full ml-4 duration-700 ${prop.dark ? "border-dark-gray":"border-light-gray"}`}></div>
                </div>
                <p className="text-gray mt-8 500:text-xl text-lg">Meaning</p>
                {part.definitions != null && part.definitions.map((definitions,index) => {
                return(
                     <ul key={index} className={`list-disc mt-3 ${prop.dark ? "text-white" : "text-black-gray"} marker:text-purple 500:text-lg text-base list-outside`}>
                       <li className="duration-700 ml-10 text-left">{definitions.definition}</li>
                       {definitions.example != null && <li className="text-gray mt-1 marker:text-transparent 500:text-lg text-base ml-10">&quot;{definitions.example}&quot;</li>}
                    </ul>)
                    })}
                    {(part.synonyms != null && part.synonyms != "") && <div className="flex mt-16">
                    <p className="text-gray 500:text-xl text-lg">Synonyms</p>
                    <p className="text-purple font-bold 500:text-xl text-lg ml-5 cursor-pointer hover:underline">{part.synonyms.join(", ")}</p>
                </div>}
                {(part.antonyms != null && part.antonyms != "") && <div className="flex mt-16">
                    <p className="text-gray 500:text-xl text-lg">Antonyms</p>
                    <p className="text-purple font-bold 500:text-xl text-lg ml-5 cursor-pointer hover:underline">{part.antonyms.join(", ")}</p>
                </div>}
                </div>
            )})
        }
        {(prop.dict.word != "" && prop.dict.word != null) && <div className={`border-t-1 w-full duration-700 mt-16 ${prop.dark ? "border-dark-gray":"border-light-gray"}`}></div>}
        {(prop.dict.word != "" && prop.dict.word != null) && <div className="flex flex-col 500:flex-row mt-6 text-sm">
            <p className="text-gray">Source</p>
            <div className="flex">
            <a href={`https://en.wiktionary.org/wiki/${prop.dict.word}`} target="_blank" rel="noreferrer" className={`${prop.dark ? "text-white" : "text-black-gray"} 500:ml-5 mr-2 duration-700 underline`}>https://en.wiktionary.org/wiki/{prop.dict.word}</a>
            <img src="/images/icon-new-window.svg" alt="new-window" />
            </div>
            </div>}
        </div>}
        {!prop.found && <div className="flex flex-col h-full items-center mt-20">
            <img src="/images/sad.png" alt="sad" className="500:w-16 w-12 max-w-full"/>
            <p className={`font-bold duration-700 500:text-xl text-lg py-8 ${prop.dark ? "text-white" : "text-dark-gray"}`}>No Definitions Found</p>
            <p className={`text-center text-gray 500:text-lg text-base`}>Sorry pal, we couldn&#39;t find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
        </div>}
        </>
    )}