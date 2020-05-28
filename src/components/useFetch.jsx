import React, {useEffect, useState} from 'react';

export const useFetch = url => {
	const [photoData, setPhotoData] = useState({data: null});
	useEffect(() => {
		fetch(url).then(res => res.json()).then(data => {
			setPhotoData(data);
			console.log(data);
		});
	}, [url]);

	return photoData;
};