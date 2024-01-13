import React, { useState } from 'react';
import '../Styles/ContactForm.css'

const ContactForm=({sendMail})=>{
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [errormassage, setErrormassage] = useState({
        subject: "",
        email: "",
        content: "",
    });
    const validation =()=>{

        setErrormassage(prev => {
            return{
                ...prev, content: "", email: ""
            }
          })

        if(content.length === 0)
        {
            setErrormassage(prev => {
                return{
                    ...prev, content: "Pole nie może być puste"
                }
              }
              )
              return "error"

        }
        else if(subject.length ===0) {
            setErrormassage(prev =>
                {
                    return{
                        ...prev, subject: "Pole nie może być puste"
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
        
        const newEmail = {
            subject: subject,
            text: content,
        }
        sendMail(newEmail);
        setErrormassage(prev => {
            return{
                ...prev, content: ""
            }
          })
    }
    
    console.log(content)
    return(
        <div className="ContactForm" >
            <h2>Napisz: Do mnie</h2>
            <form className="FormContact" onSubmit={sendEmail}>
                <label>
                    Temat: 
                    <input type="text" name="subject" onChange={(e)=> setSubject(e.target.value)} value={subject}/>
                    {errormassage.subject ? <h2>{errormassage.subject}</h2> : null}
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