import React from "react";
import {useContext, useEffect, useState, useCallback} from 'react'
import axios from 'axios'
import GameCard from "./GameCard";

import AuthContext from '../store/authContext'

const Wishlist = () => {
    const {userId, token} = useContext(AuthContext)
    
    return (
        <div>
            <h2>This is our wishlist</h2>
        </div>
    )
}

export default Wishlist

// I'm not crying, you're crying!