import { Region } from "../models/region.model";

export class RegionWiseCountryState {
  public regions: Region[] = [];
  public currentAction?: string;
  public loading?: boolean;
}

