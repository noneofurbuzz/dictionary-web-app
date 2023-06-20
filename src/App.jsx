import { useEffect, useState } from "react"
import { Navbar } from "./components/Navbar"
import { Searchbar } from "./components/Searchbar"
import { Dictionary } from "./components/Dictionary"

function App() {

  const [dark,setDark] = useState(false)
  const [search,setSearch] = useState(
    {
      word : ""
    }
  )
  const [store,setStore] = useState([])
  const [initial,setInitial] = useState("")
  const [show,setShow] = useState(false)
  const [font,setFont] = useState("Sans Serif")
  const [dictionary,setDictionary] = useState({
    word : "",
    phoneticsText : "",
    phoneticsText1 : "",
    phoneticsAudio1 : "",
    phoneticsAudio : "",
    partsOfSpeech : ""
  })
  function themeToggle(){
    setDark(prevDark => !prevDark)
  }  
  function toggleShow(){
    setShow(prevShow => !prevShow)
  }
  function sanSerif(){
    setFont("Sans Serif")
    setShow(false)
  }
  function serif(){
    setFont("Serif")
    setShow(false)
  }
  function mono(){
    setFont("Mono")
    setShow(false)
  }
  function handleChange(event){
    const {name,value} = event.target
    setSearch((prev) => {
      return{
      ...prev,
      [name] : value
      }
    }) 
  }
  useEffect(() => {
      async function getWord(){
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${initial}`)
        const data = await res.json()
        setStore(data[0])
        console.log(data[0])
      }
      getWord()
  },[initial])
  function toggleHide(){
    setShow(false)
  }
  function handleSubmit(event){
    event.preventDefault()
    setInitial(search.word)
  }
  useEffect(() => {
    setDictionary((prev) => {
      return {
      ...prev,
      word : store.word,
      phonetic : store.phonetic,
      phoneticsText : store.phonetics != null && store.phonetics.filter((phonetic) => (phonetic.text != "" && phonetic.text != null) && phonetic.audio != "" && phonetic.audio != null).slice(0,1).map((filteredPhonetic) => filteredPhonetic.text)
      ,
      phoneticsAudio : store.phonetics != null && store.phonetics.filter((phonetic) => (phonetic.text != "" && phonetic.text != null) && (phonetic.audio != "" && phonetic.audio != null) ).slice(0,1).map((filteredPhonetic) => filteredPhonetic.audio),
      phoneticsText1 : store.phonetics != null && store.phonetics.filter((phonetic) => (phonetic.text != "" && phonetic.text != null)).slice(0,1).map((filteredPhonetic) => filteredPhonetic.text),
      phoneticsAudio1 : store.phonetics != null && store.phonetics.filter((phonetic) => (phonetic.audio != "" && phonetic.audio != null)).slice(0,1).map((filteredPhonetic) => filteredPhonetic.audio),
      /*partsOfSpeech : store.meanings != null && store.meanings.map((filteredMeaning) => {
        return{
         partOfSpeech = {filteredMeaning.partOfSpeech}
        }
      })*/
    }})
  
  },[store])


  return (
    <div className={ `${font == "Sans Serif" ? "font-inter" : (font == "Serif" ? "font-lora" : "font-inconsolata")} flex flex-col items-center min-h-screen duration-700 ${dark ? "bg-black" : "hover:bg-white"} py-12`} >
      <div className="lg:w-120">
      <Navbar 
      dark = {dark}
      onClick = {themeToggle}
      dropDown = {toggleShow}
      show = {show}
      sanSerif = {sanSerif}
      serif = {serif}
      mono = {mono}
      font = {font}
      />
      </div>
      <div className="lg:w-120" onClick={toggleHide}>
        <Searchbar 
        onChange = {handleChange}
        input = {search.word}
        dark = {dark}
        hide = {toggleHide}
        onSubmit = {handleSubmit}
        />
      </div>
      <div className="lg:w-120" onClick={toggleHide}>
        <Dictionary 
        dict = {dictionary}
        dark = {dark}
        store = {store}/>
      </div>
    </div>
  )
}

export default App
