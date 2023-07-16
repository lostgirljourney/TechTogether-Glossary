import type { NextApiRequest, NextApiResponse } from 'next';
import { Data, slang } from '@/constants';

const handler = (_req: NextApiRequest, res: NextApiResponse<Data>) => {
	res.status(200).json({
		status: true,
		wordData: slang
	});
};

export default handler;
