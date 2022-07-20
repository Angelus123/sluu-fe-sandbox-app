import React, { useEffect, useState } from "react";
import Editor from "../Editor";
import sandbox from "./sandbo";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";
const SandBox = () => {
  const [command, setCommand] = useState("");
  const [renderedContent, setRenderedContent] = useState("");
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [result, setResult] = useState([])
  const onChange = (e) => {
    setCommand(e.target.value);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderedContent(`
      <html>
      <script>
      
      ${js}</script>
      </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [js]);
  
  const submitCommand = async (event) => {
    event.preventDefault();
   let obj={}
   let url ="http://localhost:4000/api/v1/codexOpenai/completions"
   obj["query"] = command+"javascript"
    var json = JSON.stringify(obj)
    console.log(json)

   axios({
        method: "POST",
        url,
        data: json,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiN2U3MmRlNmEtN2QyMS00OTNhLWI5YzItMGJkNGM1N2MwNjMzIiwiaWF0IjoxNjU4MzM3MjMzLCJleHAiOjE2NTg0MjM2MzN9.HsNG86pIhi_-Azi_N0aRFyG2ckRzKHhh38Zem7cBguA",
        },
      })
        .then(function (response) {
          console.log("res", response)

          console.log(response.data.data.choices[0].text);

          setJs(response.data.data.choices[0].text)
        })
        .catch(function (err) {
          console.log(err)
        })
      

     
     
    setHtml(command);
    setCommand("");
  }
  return (
    <div className="h-23 w-full">
      {/* <Editor
        language="javascript"
        languageName="JS"
        value={js}
        onChange={setJs}
      /> */}
      <main className="flex bg-gray-100 overflow-hidden h-47">
        <section className="w-1/2 mt-13 px-10 py-8 h-40 flex flex-col gap-10">
          <div className="bg-white dropshadow-lg h-40">
            <iframe
              className="w-full h-full"
              srcDoc={renderedContent}
              title="output"
              sandbox={sandbox}
              frameBorder="0"
              loading="lazy"
            />
          </div>
          <div className="h-12 w-full bg-white pt-5 pb-12 px-6">
            <textarea
              className="w-full outline-none text-sm h-12 flex mb-2"
              cols="30"
              placeholder="Provide instructions..."
              onChange={onChange}
            >
          
            </textarea>
            <div className="flex items-end -mt-12 justify-end">
              <button
                className="h-12 -m-3 w-12 bg-slate-600 outline-none flex items-center justify-center rounded-full"
                onClick={submitCommand}
              >
                <BsFillArrowRightCircleFill className="h-5 w-5 text-green"/>
              </button>
            </div>
          </div>
        </section>
        <section className="w-1/2 px-6 py-8 border-l-2">
          <div className="window top-window">
            

            <Editor
              language="javascript"
              languageName="JS"
              value={js}
              onChange={setJs}
            />
          </div>
          {/* {
            result.map((item, index) => (
              <span>{ item.text }</span>
            ))
          } */}
        </section>
      </main>
    </div>
  );
};

export default SandBox;
