import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import './profile.css';

interface UserProfile {
  _id: string;
  Fname: string;
  Lname: string;
  Email: string;
  address: string;
  Mnumber: string;
}

function Profile() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<UserProfile>(`http://localhost:8070/users/Profile/${id}`);
        setUserProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5"></Typography>
          <Typography>Last name: {userProfile.Mnumber}</Typography>
          
        </CardContent>
      </Card>

      <div className="cardox">
        <div className="cardox__img">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 540 450">
            <rect fill="#ffffff" width="540" height="450"></rect>
          </svg>
        </div>
        <div className="cardox__avatar">
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" fill="#ff8475" r="60"></circle>
    <circle cx="64" cy="64" fill="#f85565" opacity=".4" r="48"></circle>
    <path d="M64 14a32 32 0 0 1 32 32v41a6 6 0 0 1-6 6h-52a6 6 0 0 1-6-6v-41a32 32 0 0 1 32-32z" fill="#7f3838"></path>
    <path d="M62.73 22h2.54a23.73 23.73 0 0 1 23.73 23.73v42.82a4.45 4.45 0 0 1-4.45 4.45h-41.1a4.45 4.45 0 0 1-4.45-4.45v-42.82a23.73 23.73 0 0 1 23.73-23.73z" fill="#393c54" opacity=".4"></path>
    <circle cx="89" cy="65" fill="#fbc0aa" r="7"></circle>
    <path d="M64 124a59.67 59.67 0 0 0 34.69-11.06l-3.32-9.3a10 10 0 0 0-9.37-6.64h-43.95a10 10 0 0 0-9.42 6.64l-3.32 9.3a59.67 59.67 0 0 0 34.69 11.06z" fill="#4bc190"></path>
    <path d="M45 110 5.55 2.92 2 0 18 90l-12.38 10.25a2 2 0 0 0 .38 3.25z" fill="#356cb6" opacity=".3"></path>
    <path d="M71 96.5v27.09a60.14 60.14 0 0 0 9-1.74l-2.54-8.93 5.54-2.92a2 2 0 0 0 .41-3.25z" fill="#356cb6" opacity=".3"></path>
    <path d="M57 123.68a58.54 58.54 0 0 0 14 0v-25.68h-14z" fill="#fff"></path>
    <path d="M64 88.75v9.75" fill="none" stroke="#fbc0aa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="14"></path>
    <circle cx="39" cy="65" fill="#fbc0aa" r="7"></circle>
    <path d="M64 91a25 25 0 0 1-25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1-25 25z" fill="#ffd8c9"></path>
    <path d="M91.49 51.12v-4.72c0-14.95-11.71-27.61-26.66-28a27.51 27.51 0 0 0-28.32 27.42v5.33a2 2 0 0 0 2 2h6.81a8 8 0 0 0 6.5-3.33l4.94-6.88a18.45 18.45 0 0 1 1.37 1.63 22.84 22.84 0 0 0 17.87 8.58h13.45a2 2 0 0 0 2.04-2.03z" fill="#bc5b57"></path>
    <path d="M62.76 36.94c4.24 8.74 10.71 10.21 16.09 10.21h5" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" opacity=".1"></path>
    <path d="M71 35c2.52 5.22 6.39 6.09 9.6 6.09h3" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" opacity=".1"></path>
    <circle cx="76" cy="62.28" fill="#515570" r="3"></circle>
    <circle cx="52" cy="62.28" fill="#515570" r="3"></circle>
    <ellipse cx="50.42" cy="69.67" fill="#f85565" opacity=".1" rx="4.58" ry="2.98"></ellipse>
    <ellipse cx="77.58" cy="69.67" fill="#f85565" opacity=".1" rx="4.58" ry="2.98"></ellipse>
    <path d="M64 67v4" fill="none" stroke="#fbc0aa" strokeWidth="4"></path>
    <path d="M55 56h-9.25" opacity=".2" fill="none" stroke="#515570" strokeWidth="2"></path>
    <path d="M82 56h-9.25" opacity=".2" fill="none" stroke="#515570" strokeWidth="2"></path>
    <path d="M64 84c5 0 7-3 7-3h-14s2 3 7 3z" fill="#f85565" opacity=".4"></path>
    <path d="M65.07 78.93-.55.55a.73.73 0 0 1 1 0l.55.55c1.14 1.14 2.93.93 4.27-.47l1.7-1.6h14l-1.66 1.6c-1.34 1.4-3.13 1.61-4.27.47z" fill="#f85565"></path>
  </svg>
</div>

        <div className="cardox__title">{userProfile.Fname} {userProfile.Lname}</div>
        <div className="cardox__subtitle">
          <Typography>Email: {userProfile.Email}</Typography>
          <Typography>Number: {userProfile.Mnumber}</Typography>
          <Typography>Address: {userProfile.address}</Typography></div>
        <div className="cardox__wrapper">
          <button className="cardox__btn">Button</button>
          <button className="cardox__btn card__btn-solid">Button</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
