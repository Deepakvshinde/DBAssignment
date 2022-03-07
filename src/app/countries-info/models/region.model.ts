import { Country } from "./country.model";

export class Region {
  public name?: string;
  public countries?: Country[] = [];
}
