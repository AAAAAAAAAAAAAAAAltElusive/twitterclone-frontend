import axios from "axios";
import { toast } from "react-toastify";
import { UNFOLLOW_ENDPOINT } from "../utils/endpoints";

interface PropsType {
  followingId: string;
}

const UnfollowButton: React.FC<PropsType> = ({ followingId }) => {
  const handleFollowClick = async () => {
    try {
      const data = { followingId: followingId };
      await axios.delete(UNFOLLOW_ENDPOINT + `/${followingId}`, { withCredentials: true });
      toast("Unfollowed user successfully");
    } catch (err) {
      console.log(err);
      toast("You are not following this user !!");
    }
  };

  return (
    <button
      className="w-24 h-10 px-2 bg-gray-300 text-gray-900 font-semibold text-base rounded-full hover:bg-gray-400 hover:text-black cursor-pointer"
      onClick={() => {
        handleFollowClick();
      }}
    >
      Unfollow
    </button>
  );
};

export default UnfollowButton;
