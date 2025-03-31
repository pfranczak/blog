import React from 'react';

const useReadTime = (text: string) => {
	const words = text.trim().split(/\s+/).length;
	const WPM = 238;
	const time = Math.ceil(words / WPM);
	const unit = time < 2 ? 'minute' : 'minutes';

	return { time, unit }
};

export default useReadTime;
