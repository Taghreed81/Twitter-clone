import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { Twitter } from '../icons'



function Main() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    return (
        <>
          <div class="container" class="main" >
             <div class="row">
                <div class="col"  >
                    <img src="https://i.imgur.com/Pfnb4uP.png"  />
               </div>

               <div class="col" id="right-side" >
                    <div className="auth-page__logo" >
                        <Button icon><Twitter /></Button>
                    </div>
                    <TextTitle title ><b>See what’s happening in <br></br> the world right now</b></TextTitle>
                    <TextTitle title ><b>Join Twitter today.</b></TextTitle>
                    
                  
                   
               </div>
            </div>
         </div>
        </>
    )
}

export default Main
