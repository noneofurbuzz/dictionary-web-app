export function Searchbar(prop){
    return(
        <form className={`w-full flex mt-12 rounded-xl border-transparent border-1 hover:border-purple hover:duration-700 focus-within:border-purple py-2 px-4 font-semibold ${prop.dark ? ("bg-darker-gray") : ("bg-whitish-gray")}`}  onSubmit={prop.onSubmit}>
            <input type="text" name="word" value={prop.input} onChange={prop.onChange} className={`w-full rounded-lg border-none text-xl focus:ring-0 ${prop.dark ? ("bg-darker-gray text-white placeholder-gray") : ("bg-whitish-gray text-dark-gray placeholder-gray")}`} autoComplete="off" spellCheck = "false" placeholder="Search for any word..."/>
            <img src="/images/icon-search.svg" alt="search" className="mx-4"/>
        </form>
        
    )
}