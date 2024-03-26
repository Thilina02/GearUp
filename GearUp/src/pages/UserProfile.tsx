import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';
import './userProfile.css';

function UserProfile() {
    const { id } = useParams(); // Get id from route parameters
    const navigate = useNavigate();
    const [user, setUser] = useState({
        Fname: "",
        Lname: "",
        Email: "",
        Mnumber: "",
        password: "",
        address: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8070/users/Profile/${id}`);
                const userData = response.data;
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user', error);
            }
        };

        fetchUserData();
    }, [id]); // Fetch data whenever id changes

    const updateUser = async () => {
        try {
            await axios.put(`http://localhost:8070/users/updateUser/${id}`, user);
            
           
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10vh' }}>User Profile</h2>
            <TableContainer component={Paper} className='User-Table'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Attribute</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>
                                <TextField
                                    name="Fname"
                                    value={user.Fname}
                                    onChange={handleChange}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Last Name</TableCell>
                            <TableCell>
                                <TextField
                                    name="Lname"
                                    value={user.Lname}
                                    onChange={handleChange}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>
                                <TextField
                                    name="Email"
                                    value={user.Email}
                                    onChange={handleChange}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Mobile Number</TableCell>
                            <TableCell>
                                <TextField
                                    name="Mnumber"
                                    value={user.Mnumber}
                                    onChange={handleChange}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Password</TableCell>
                            <TableCell>
                                <TextField
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Address</TableCell>
                            <TableCell>
                                <TextField
                                    name="address"
                                    value={user.address}
                                    onChange={handleChange}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button color='secondary' onClick={updateUser}>Update</Button>
        </div>
    );
}

export default UserProfile;
