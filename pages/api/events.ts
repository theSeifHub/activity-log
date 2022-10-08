// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma';

type DataResponse = {
  message: string,
  data?: any,
}

const EventsPerPage = 5;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>
) {
  if (req.method  === 'GET') {
    const pageNo: number = req.query.page ? +req.query.page : 1;

    const events = await prisma.event.findMany({
      include: {
        actor: true,
      },
      skip: (pageNo - 1) * EventsPerPage,
      take: EventsPerPage,
    });

    res.status(200).json({
      message: 'events fetched successfully',
      data: events,
    });
  } else if (req.method  === 'POST') {
    res.status(201).json({ message: 'POST IT!' });
  }
}
