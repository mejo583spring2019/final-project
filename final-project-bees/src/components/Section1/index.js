import React from "react"
import "./style.css"

class Section1 extends React.Component { 
    render() { 
        return (
            <section class="panel-2">
             <div class="grid-2 flex">
               
               <div id="panel-2-myth">
                  <h1>
                    Myth:
                 </h1>
                 <p> 
                        Bees are evil creatures out to sting us.  <br /> Kill all the bees.
                 </p>
               </div>
               <div id="panel-2-fact">
                <h1>
                    Fact:
                </h1>
                <p> 
                    Bees are actually an essential part of our ecosystem. <br />They are essential to the growth of crops all over the world. 
                </p>
               </div>
               <div id="panel-2-footer">
                <h1>
                   (but you probably already knew that)
                </h1>  
               </div>
            </div>
        </section>
        )
    }
}

export default Section1 