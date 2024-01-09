import React, { useState } from 'react';
import '../Styles/ContactForm.css'

const ContactForm=()=>{
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("");
    const [errormassage, setErrormassage] = useState({
        email: "",
        content: "",
    });
    const validation =()=>{
        if(email.length === 0 ){

          setErrormassage(prev => {

            return{
                ...prev, email: "Pole nie może być puste"
            }
          })
          return "error"
        
        } else if(content.length === 0)
        {
            setErrormassage(prev => {
                return{
                    ...prev, content: "Pole nie może być puste"
                }
              }
              )
              return "error"

        }
        return null
    
         
        }
    
    const sendEmail=(e)=>{
        e.preventDefault()
        const isError=validation()
        if(isError !== null){
            return
        }
        setErrormassage(prev => {
            return{
                ...prev, content: "", email: ""
            }
          })
    }

    console.log(email)
    console.log(content)
    return(
        <div className="ContactForm" >
            <h2>Napisz: Do mnie</h2>
            <form className="FormContact" onSubmit={sendEmail}>
                <label>
                    Temat: 
                    <input type="text" name="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                    {errormassage.email ? <h2>{errormassage.email}</h2> : null}
                    
            

                </label>
                <br></br>
                <label>
                    Treść: 
                    <textarea name="content" onChange={(e)=> setContent(e.target.value)} value={content}/>
                    {errormassage.content ? <h2>{errormassage.content}</h2> : null}
                </label>
                <br></br>
                <button type="submit">
                    Wyślij
                </button>
            </form>
        </div>
    )
}
export default ContactForm;