import { toLocaleString } from "./date";
import sortDragons from "./sortDragons";

export const dragonsParser = dragons => {
  const listDragons = dragons.map(dragon => ({
    ...dragon,
    date: toLocaleString(dragon.createdAt)
  }));

  return sortDragons(listDragons);
};
