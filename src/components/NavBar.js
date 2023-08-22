import {BiMoon,BiSolidMoon} from "react-icons/bi"

const NavBar = (props) => {
    const lightmode=props.lightmode;
    const setlightMode=props.setlightMode;

const myStyle={
    backgroundColor:"rgb(241 245 249)",
}
const myStyle2={
    backgroundColor:"#00004d",
    color:"white"
}

function ToggleLightMode(){
    setlightMode(!lightmode);
}
  return (
   <nav className={`flex flex-row justify-between items-center w-[100vw] px-[2rem]  h-[10vh]`} style={lightmode===true?myStyle:myStyle2}>
   <div className='flex flex-row justify-center items-center gap-[1rem]'>
   <h3 className='cursor-pointer font-semibold text-[1.25rem]'>TextUtils</h3>
    <ul className='flex gap-4 '>
        <li className='cursor-pointer'>Home</li>
        {/* <li className='cursor-pointer'>About</li> */}
    </ul>
   </div>
    {
        lightmode && <BiMoon className='text-[1.5rem] cursor-pointer ' onClick={ToggleLightMode} />
    }
    {
        !lightmode && <BiSolidMoon className='text-[1.5rem] cursor-pointer ' onClick={ToggleLightMode} />
    }
   </nav>
  )
}

export default NavBar
