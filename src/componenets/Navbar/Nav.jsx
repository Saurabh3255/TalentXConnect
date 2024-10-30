
import NavAppliedJob from './NavAppliedJob'
import NavNotice from './NavNotice'
import Profile from './Profile'
import Calender from './Calender'

function Nav() {
  return (
    <div className="flex items-center space-x-4">
    <Calender />
      <NavAppliedJob />
      <NavNotice />
      <Profile />
    </div>
  )
}

export default Nav
