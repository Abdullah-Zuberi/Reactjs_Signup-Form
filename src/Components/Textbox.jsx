import React from 'react';


const Textbox = (props) => {
    
    const customStyle ={
        backgroundColor: props.color,
        padding: props.padding,
        textAlign: props.textAlign,
        
    }; 
    return (
        <input type={props.type} placeholder={props.placeholder} value={props.value}
         style={{...style, ...customStyle }} >{props.title}
         </input>
    )
}

export default Textbox;

let style ={

    
        fontweight: "bold",  
        color: "beige",
        display: "flex",  
        boxShadow: "0 0 3px 2px #cec7c759",  
        alignItems: "center",  
        lineHeight: "0",  
          
        
};



