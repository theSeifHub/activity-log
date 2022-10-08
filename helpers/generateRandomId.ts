import { IDPrefixes } from "../constants/prefixes";

const generateRandomId = (idPrefix: IDPrefixes, idTailLength: number): string => {
  let generatedId = `${idPrefix}`;
  const possibleValues = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < idTailLength; i += 1) {
    generatedId += possibleValues.charAt(Math.floor(Math.random() * possibleValues.length));
  }
  return generatedId;
};

export default generateRandomId;
