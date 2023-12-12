export default interface Cat {
  id?: string;
  name: string;
  catIndex: number;
  species: string;
  favFoods: Array<string>; // or string[]
  birthYear: number;
}
