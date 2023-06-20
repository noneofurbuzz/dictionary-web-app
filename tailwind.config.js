/** @type {import('tailwindcss').Config} */

const plugin = require('@tailwindcss/forms')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
          "whitish-gray": "hsl(0, 0%, 96%)",
          "light-gray": "hsl(0, 0%, 91%)",
          "gray": "hsl(0, 0%, 51%)",
          "dark-gray": "hsl(0, 0%, 23%)",
          "darker-gray": "hsl(0, 0%, 18%)",
          "black-gray": "hsl(0, 0%, 12%)",
          "black-2": "hsl(0, 0%, 2%)",
          "purple": "hsl(274, 82%, 60%)",
          "red": "hsl(0, 100%, 66%)",
          "svg" : "#838383",
          "svg-1" : "#A445ED",
          "purple-1" : "hsl(274,82%,60%,1)"

      },
      width:{
        "100":"33rem",
        "110":"35rem",
        "120":"45rem"
      },
      fontFamily : {
        "inconsolata" : ["inconsolata","monospace"],
        "lora" : ["lora","serif"],
        "inter" : ["inter","sans"]
      },
      borderWidth : {
        "1":"1px"
      },
      fontSize : {
        "6xl" : "4rem",
        "2.5xl" : "1.6rem"
      }
    },
  },
  plugins: [
    plugin
  ],
}

