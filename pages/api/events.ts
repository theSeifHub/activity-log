// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma';
import { IDPrefixes } from '../../constants/prefixes';
import generateRandomId from '../../helpers/generateRandomId';

type DataResponse = {
  message: string,
  data?: any,
}

const EventsPerPage = 5;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>
) {
  await prisma.$connect();
  if (req.method  === 'GET') {
    const pageNo: number = req.query.page ? +req.query.page : 1;

    const events = await prisma.event.findMany({
      include: {
        actor: true,
        Action: true,
      },
      take: pageNo * EventsPerPage,
    });

    res.status(200).json({
      message: 'events fetched successfully',
      data: events,
    });
  } else if (req.method  === 'POST') {
    const {
      actorId,
      actorName,
      actionId,
      actionName,
      targetId,
      targetName,
      location,
      occurredAt,
      metadataRedirect,
      metadataDescription,
      metadataXRequestId,
    } = req.body;

    let actor = await prisma.actor.findUnique({
      where: {
        id: actorId,
      }
    });
    if (!actor) {
      actor = await prisma.actor.create({
        data: {
          id: actorId,
          name: actorName && actorName.length ? actorName : 'Anonymous',
        }
      });
    }

    let action = await prisma.action.findUnique({
      where: {
        id: actionId,
      }
    });
    if (!action) {
      action = await prisma.action.create({
        data: {
          id: actionId,
          name: actionName && actionName.length ? actionName : 'Untitled action',
          object: "event_action",
        }
      });
    }

    const event = await prisma.event.create({
      data: {
        id: generateRandomId(IDPrefixes.EventId, 12),
        object: "event",
        actorId: actor.id,
        actionId: action.id,
        targetId,
        targetName,
        location: location ?? null,
        occurredAt: occurredAt ?? new Date(),
        metadataRedirect: metadataRedirect ?? null,
        metadataDescription: metadataDescription ?? null,
        metadataXRequestId: metadataXRequestId ?? generateRandomId(IDPrefixes.XRequestId, 12),
      }
    })
    res.status(201).json({
      message: 'new event added successfully',
      data: event,
    });
  }
}
