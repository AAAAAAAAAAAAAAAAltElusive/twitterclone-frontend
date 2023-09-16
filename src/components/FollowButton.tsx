import axios from "axios"
import { FOLLOW_ENDPOINT } from "../utils/endpoints"
import { toast, ToastContainer } from "react-toastify"

interface PropsType {
    followedId: string
}

const FollowButton: React.FC<PropsType> = ({ followedId }) => {

    const handleFollowClick = async () => {
        try {
            const data = { followedId: followedId }
            await axios.post(FOLLOW_ENDPOINT + `/${followedId}` , data, { withCredentials: true })
            toast(`Followed ${data.followedId} succesfully!`, {
              theme: "dark",
            });
        } catch (err) {
            console.log(err)
            toast("Already following this user!!")
        }
    }

    return (
      <>
        <ToastContainer/>
        <button className="w-20 h-10 px-2 py-1 bg-gray-300 text-black font-semibold text-lg rounded-full cursor-pointer transition duration-300 hover:bg-gray-400 hover:text-black" onClick={() => { handleFollowClick() }}>
            Follow
        </button>
      </>
    )
}

export default FollowButton
