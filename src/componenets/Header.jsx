import Calender from "./Calender"
import NavAppliedJob from "./NavAppliedJob"
import NavNotice from "./NavNotice"
import Profile from "./Profile"
import SearchBar from "./SearchBar"

function Header() {
 

  return (
    <div className='flex w-full h-28 bg-white-400 shadow-lg'>
      {/* <div className='size-20 mt-4' ><img width={"200px"} src="https://i1.sndcdn.com/avatars-dKzg1TMFu6cGyGp1-swOrsg-t200x200.jpg"></img>
      </div> */}
      {/**{logo}*/}
    
      <ul className="flex flex-wrap ml-auto space-x-4 p-9">
        <li><SearchBar /></li>
        <div className="flex gap-3 mt-2">
        <li><Calender /></li>
        <li><NavAppliedJob /></li>
        <li><NavNotice /></li>
        <li><Profile /></li>
        </div>
      </ul>
    </div>
  )
}

export default Header
