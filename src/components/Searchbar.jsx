export function Searchbar(prop){
    return(
        <>
        <form className={`w-full flex mt-12 rounded-xl border-1 border-transparent hover:border-purple hover:duration-700 focus-within:border-purple py-2 px-4 font-semibold ${prop.dark ? ("bg-darker-gray") : ("bg-whitish-gray")} ${prop.error ? "focus-within:border-red border-red duration-0 hover:border-red" : ""}`}  onSubmit={prop.onSubmit}>
            <input type="text" name="word" value={prop.input} onChange={prop.onChange} className={`w-full rounded-lg border-none 500:text-xl text-base focus:ring-0 ${prop.dark ? ("bg-darker-gray text-white placeholder-gray") : ("bg-whitish-gray text-dark-gray placeholder-gray")}`} autoComplete="off" spellCheck = "false" placeholder="Search for any word..."/>
            <img src="/images/icon-search.svg" alt="search" className="mx-4"/>
        </form>
        {prop.error && <p className="text-red mt-2 500:text-xl text-base">Whoops,can&#39;t be empty</p>}
        </>
        
    )
}