import React, {useEffect, useState} from 'react';

// A component where it is highly dependent to url

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