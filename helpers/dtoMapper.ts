import { EventDTO, IEvent } from "../constants/DTO";

export const mapToEventViewModel = (dto: EventDTO) => {
  return {
    id: dto.id,
    object: dto.object,
    actorId: dto.actor.id,
    actorName: dto.actor.name,
    actorGroup: dto.actor.group,
    actionId: dto.Action.id,
    actionObject: dto.Action.object,
    actionName: `${dto.Action.role}.${dto.Action.name}`,
    targetId: dto.targetId,
    targetName: dto.targetName,
    location: dto.location,
    occurredAt: new Date(dto.occurredAt),
    metadataRedirect: dto.metadataRedirect,
    metadataDescription: dto.metadataDescription,
    metadataXRequestId: dto.metadataXRequestId,
  } as IEvent;
}