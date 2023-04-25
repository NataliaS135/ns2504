import React from "react";

function ClickedButton({handleButtonClick}){
    return(
        <button onClick={handleButtonClick}>
            OBLICZ:
        </button>
    );
}
export default ClickedButton;