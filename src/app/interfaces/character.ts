export interface Character {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
  originName: string;
}

export interface CharactersResponse {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
  characters: Character[];
}
