import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
	// Option 1
	// const images = props.images.map(({ description, id, urls }) => {
	// 	return <img alt={description} key={id} src={urls.regular} />;
	// });

	//Option 2
	const images = props.images.map((image) => {
		return <ImageCard key={image.id} image={image} />;
	});

	return <div className='image-list'>{images}</div>;
};

export default ImageList;
