import React, { useState, useEffect } from 'react';
import moment from 'moment'

function Holiday() {
    return (
        <>
            <div className="w-full flex flex-col justify-around items-center p-4 md:flex-row">
                <div>
                <h1 className="text-2xl font-bold">Next Islamic Holiday :</h1>
                <p>in : 23-03-22</p>
                <p>stay : 12 Day</p>
                </div>
                <p className="text-2xl font-bold">Israa & Miaraj</p>
            </div>        
            </>
    );
}

export default Holiday;