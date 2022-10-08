export interface IEvent {
  id: string,
  object: string,
  actorId: string,
  actorName: string,
  actorGroup: string,
  actionId: string,
  actionObject: string,
  actionName: string,
  targetId: string,
  targetName: string,
  location: string,
  occurredAt: Date,
  metadataRedirect: string,
  metadataDescription: string,
  metadataXRequestId: string,
};

export interface EventDTO {
  createdAt: string,
  id: string,
  object: string,
  actorId: string,
  actionId: string,
  targetId: string,
  targetName: string,
  location: string,
  occurredAt: string,
  metadataRedirect: string,
  metadataDescription: string,
  metadataXRequestId: string,
  actor: {
    id: string,
    name: string,
    group: string,
  },
  Action: {
    id: string,
    name: string,
    object: string,
    role: string,
  }
}
