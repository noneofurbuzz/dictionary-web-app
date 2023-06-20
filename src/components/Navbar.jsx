export function Navbar(prop){
    
    return(
    <div className="flex justify-between w-full items-center">
    <img src="/images/logo.svg" alt="logo"/>
    <div className="flex items-center">
    <div className="flex items-center justify-center cursor-pointer " onClick ={prop.dropDown}>
        <p className={`${prop.dark ? "text-light-gray" : "text-dark-gray"} font-bold text-base 500:text-lg mr-4`} >{prop.font}</p>
        <svg xmlns="http://www.w3.org/2000/svg" className = {`transition-all max-w-full ${prop.show ? "rotate-180" : ""}`} width="14" height="8" viewBox="0 0 14 8"><path fill="none" stroke="#A445ED" strokeWidth="1.5" d="m1 1 6 6 6-6"/></svg>
    </div>
    <div className={`font-bold -mt-9 500:text-lg text-base duration-700 ${prop.dark ? "text-light-gray shadow-[0px_0px_20px_0px_rgb(164,69,237)] bg-black-gray" : "text-dark-gray shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] bg-white"} flex-col absolute top-32 ] rounded-2xl py-5 pl-5 pr-20 ${prop.show ? "flex" : "hidden"} ${prop.font == "Sans Serif" ? "-translate-x-1/4" : (prop.font == "Serif" ? "-translate-x-2/4" : "-translate-x-2/4")}`}>
        <p className={`${prop.font == "Sans Serif" ? "text-purple" : (prop.dark ? "text-light-gray" : "text-dark-gray")} font-inter font-bold duration-500 mb-2 cursor-pointer hover:text-purple active:text-purple`}onClick={prop.sanSerif}>Sans Serif</p>
        <p className={`${prop.font == "Serif" ? "text-purple" : (prop.dark ? "text-light-gray" : "text-dark-gray")} font-lora font-bold duration-500 mb-2 cursor-pointer hover:text-purple active:text-purple`} onClick={prop.serif}>Serif</p>
        <p className={`font-inconsolata duration-500 font-bold leading-tight cursor-pointer hover:text-purple active:text-purple ${prop.font == "Mono" ? "text-purple" : (prop.dark ? "text-light-gray" : "text-dark-gray")}`} onClick={prop.mono}>Mono</p>
    </div>
    <div className="border-l-2 h-8 mx-4 border-whitish-gray"></div>
        <div className="relative group cursor-pointer align-middle flex" onClick={prop.onClick}> 
            <div className={`rounded-full w-10 h-5 bg-gray duration-700 ${prop.dark ? "group-hover:bg-gray group-active:bg-gray bg-purple" : "group-hover:bg-purple group-active:bg-purple bg-gray"}` }></div>
            <div className={`absolute bg-white rounded-full h-4 left-0.5 top-0.5 w-4 transition-all duration-700 ${prop.dark ?"translate-x-full" : ""} ${prop.dark ?"left-1.5" : ""} ${prop.dark ?"transition-all" : ""} `}></div>
        </div>
        <svg className = {`${prop.dark ? "stroke-purple" : "stroke-svg"} duration-700 ml-3`} fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
    </div>
    </div>
    )
}