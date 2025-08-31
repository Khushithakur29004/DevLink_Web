import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({user}) => {
//  if (!user) return <h1>No user found</h1>;
    const {_id, firstName, lastName, photoUrl, age, gender, about}= user;
    const dispatch = useDispatch();

   const handleSendRequest = async (status,userId)=>{
    try{
      const res= await axios.post(
  `${BASE_URL}/request/send/${status}/${userId}`,
  null,   // no body needed
  { withCredentials: true }   // important!
);

      dispatch(removeUserFromFeed(userId));
   } catch (err) {
  if (err.response) {
    console.error("Status:", err.response.status);
    console.error("Response data:", err.response.data);
    console.error("Request config:", err.config);
  } else {
    console.error(err);
  }
}

   }

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    {age && gender &&<p>{age + ", " + gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center my-3">
         <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored", _id)}>Ignore</button>
      <button className="btn btn-secondary"onClick={()=>handleSendRequest("interested", _id)}>Interested</button>
    </div>
  </div>
</div>
  );
};

export default UserCard;