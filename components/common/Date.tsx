import React from 'react';

type Format = {
	year: string,
	month: string,
	day: string,
}

type Props = {
	date: string,
	format?: Format
}

const TIME_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' };

const FormattedDate = ({ date, format = TIME_OPTIONS }: Props) => {
	return (
		<>
			{new Date(date).toLocaleDateString("en-US", format as Intl.DateTimeFormatOptions)}
		</>
	);
};

export default FormattedDate;
