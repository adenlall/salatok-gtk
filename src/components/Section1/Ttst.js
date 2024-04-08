import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { Helper } from './Helper';


function Ttst(props) {

    const [arr, setArr] = useState(false);

	useEffect(() => {
	  
		const h = new Helper();
		const dWeek = h.dWeek(props.ynt);

		document.title = `${props.ynt} Time - Salatok.App - Muslim Day Manager`;

		let newArr = [];
		for (let i = 0; i < dWeek.length; i++) {
			newArr.push(
			    <div className='flex space-x-2 justify-between' key={i} >
			        <p className='italic'>{dWeek[i][1].day} {dWeek[i][1].date}</p>
			        <div className='flex justify-between w-1/3 space-x-2'>
			            <p className='px-2 pt-1 rounded-lg bg-slate-200 dark:bg-gray-700 dark:text-slate-100 text-gray-800' key={i}>{dWeek[i][0]}</p>
			            <p className={((dWeek[i][1].diff > 0) ? 'text-green-500' : (dWeek[i][1].diff < 0) ? 'text-red-500' : 'text-gray-400') + ' font-bold w-full'}>{dWeek[i][1].diff > 0 ? '+' : ''}{dWeek[i][1].diff}<strong className='text-xs'>min</strong></p>
			        </div>
			    </div>
			)
		}
		setArr(newArr);
	
	}, [props.ynt]);
	
	
	return (
			<div className='flex flex-col space-y-2 p-8 w-full'>
				<h1 className='text-xl font-bold'>week times of {props.ynt} :</h1>
				{
					arr ? 
					(
						<>
							<div className='flex flex-col space-y-3 lg:py-8 py-2 px-2'>{arr}</div>
							<h3>done!</h3>
						</>
					) : (
						<h3 className="h-full font-bold">Loading...</h3>
					)
				}
			</div>
	);
}

export default Ttst;
