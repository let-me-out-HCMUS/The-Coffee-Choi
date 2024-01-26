import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/authContext'


const ThirdPartyToken = () => {
  const token = window.location.search.split('=')[1]

  const {thirdPartyLogin} = React.useContext(AuthContext);

  const navigate = useNavigate()

  React.useEffect(() => {
    const parseToken = async () => {
      const response = await thirdPartyLogin(token)

      if (response.status === 'success'){
        navigate('/', {replace: true})
      }
    }

    parseToken()
  },
  []);

  return (
    <div></div>
  )
}

export default ThirdPartyToken