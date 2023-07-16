import type { NextApiRequest, NextApiResponse } from 'next';
import { Data, vocabulary } from '@/constants';

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	let { word } = req.query;

	if (word) {
		word = word?.toString().toLowerCase();
		const wordData = vocabulary.filter(
			(data) => data.word.toLowerCase().startsWith(word as string) === true
		);
		if (wordData) {
			res.status(200).json({
				status: true,
				wordData
			});
		} else {
			res.status(200).json({
				status: false,
				wordData: []
			});
		}
	} else {
		res.status(200).json({
			status: false,
			wordData: []
		});
	}
};

export default handler;
