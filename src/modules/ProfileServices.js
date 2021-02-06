import axios from 'axios'
import { LOCAL_STORAGE_KEY } from './Auth'
import toBase64 from './toBase64'

const ProfileServices = {
  async update(event, currentUser, dispatch) {
    event.preventDefault()

    let headers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    let encodedImage
    if (event.target.image.files[0]) {
      encodedImage = await toBase64(event.target.image.files[0])
    }
    let response = await axios.put(
      `/user/${currentUser.id}`,
      {
        company_name: event.target.company_name.value,
        adress: event.target.adress.value,
        zipcode: event.target.zipcode.value,
        city: event.target.city.value,
        image: encodedImage,
      },
      {
        headers: headers,
      }
    )
    event.target.reset()
    if (response.status === 200) {
      dispatch({
        type: 'SET_PROFILE_MESSAGE',
        payload: 'Your profile has been successfully updated!',
      })
      dispatch({
        type: 'SET_PROFILE_DATA',
        payload: response.data.user,
      })
    }
  },
}

export default ProfileServices
