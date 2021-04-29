import './App.css';
import Tippy from "@tippy.js/react";
import React, {forwardRef} from 'react'
import 'tippy.js/dist/tippy.css'

const ColoredTooltip = () => {
    return <span style={{color: 'brown'}}> Colored components  </span>
}
const CustomChild = forwardRef((props, ref) => {
    return(
        <div ref={ref}>
            <div>
                First Line
            </div>
            <div>Second Line of </div>
        </div>
    )
})

function App() {

    return (
        <div className='App'>
            <p>Tooltip </p>
            <div style={{paddingBottom: '20px'}}>
                <Tippy arrow = {false} placement='right' delay = {1002} content='wow  Tooltip'>
                    <button>Hover</button>
                </Tippy>
            </div>

            <div style={{paddingBottom: '20px'}}>
                <Tippy content={<span style={{color: 'orange'}}> Colored components</span>}>
                    <button>Hover</button>
                </Tippy>
            </div>
            <div style={{paddingBottom: '20px'}}>
                <Tippy content= {<ColoredTooltip> </ColoredTooltip>}>
                    <button>Hover</button>
                </Tippy>
            </div>

            <div style={{paddingBottom: '20px'}}>
                <Tippy placement='top-start' content= {<ColoredTooltip> </ColoredTooltip>}>
                    <CustomChild> </CustomChild>
                </Tippy>
            </div>
        </div>
  );
}
export default App;
