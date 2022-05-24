import useTranscriber from '../shared/hooks/useTranscriber';
import useUser from '../shared/hooks/useUser';

const Header = () => {

    const {isLoggedIn } = useTranscriber()

    const {user , clearSession} = useUser();

    const handleLogout = () => {
      clearSession()
    }
    

    const renderUserDetails = () => {
      if(!user.id) return
      const {firstName , lastName} = user;
      return (
        <div className='ml-auto flex items-center'>
            <div className='box50by50 rounded-2xl'></div>
            <span className='ml-10'>{`${firstName} ${lastName}`}</span>
            <span onClick={handleLogout} className='text-blue-600 ml-10 cursor-pointer'>Logout</span>
          </div>
      )
    }
    

    return (
        <div className='flex items-center pt-7'>
        <div className={isLoggedIn ? 'box50by50': 'box100by100'}></div>
        
        <div className='flex flex-col pl-10'>
          <h1>USS Enterprise</h1>
          <h2>Communications</h2>
        </div>

        {renderUserDetails()}

      </div>
    )
}



export default Header;