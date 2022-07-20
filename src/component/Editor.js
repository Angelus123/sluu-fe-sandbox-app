import React, {useState} from "react"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/theme/ayu-dark.css"
import "codemirror/theme/duotone-dark.css"
import "codemirror/theme/dracula.css"
import "codemirror/theme/blackboard.css"
import "codemirror/theme/lucario.css"
import "codemirror/theme/3024-day.css"
import "codemirror/theme/eclipse.css"
import "codemirror/theme/elegant.css"
import "codemirror/theme/base16-light.css"

import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"
import {Controlled as ControlledEditor} from "react-codemirror2"
import "../index.css"

import { Dropdown } from "react-bootstrap"
import themes from "./themes"
import useLocalStorage from "./hooks/useLocalStorage"


export default function Editor(props){

    const {
        language,
        languageName,
        value,
        onChange
    } = props

    const [open, setOpen] = useState(true);
    const [theme, setTheme] = useState("base16-light")



    function handleChange(editor, data, value){
        console.log("value:-",value)
        onChange(value)
    }
    return(

        <div className={`editor-div ${open ? '' : 'collapsed'} mt-10 h-40`}>
           <div className="editor-header ">

            {/* {languageName} */}

            <Dropdown className="theme-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {/* {theme} */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    themes.map(theme=>{
                        return(
                            <Dropdown.Item onClick={()=>{setTheme(theme["name h-40"])}}>{theme["name h-40"]}</Dropdown.Item>
                        )
                    })
                }
            </Dropdown.Menu>
            </Dropdown>


            <button type="button" className="expand-collapse-btn" onClick={()=>{setOpen(prevOpen=> !prevOpen)}}>
                
                {/* <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} /> */}
            
            </button>

           

           </div>
           <ControlledEditor
           
           onBeforeChange={handleChange}
           value={value}
           className="code-mirror-wrapper h-40"
           options={{
               lineWrapping:true,
               lint:true,
               mode:language,
               lineNumbers:true,
               theme:theme
             
           }}
           
           />
        </div>
    )
}