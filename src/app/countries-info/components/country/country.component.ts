import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { allRegions, getCountriesDetails, selectCountries } from '../../store/selectors';
import { getAllCountriesByRegionAction } from '../../store/action';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  async: any;
  SELECT_REGION = 'Select Region';
  SELECT_COUNTRY = 'Select Country';
  isDisabledFlag: boolean = true;
  allRegionWiseCountry$!: Observable<any>;
  allRegions$!: Observable<any>;
  getCountriesDetails$!: Observable<any>;
  selectedCountryDetailsArr = [];
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.allRegions$ = this.store.pipe(select(allRegions));
  }

  getSelectedValue(event: any){
    if(event.type === this.SELECT_REGION && event.value !== ''){
      this.store.dispatch(getAllCountriesByRegionAction({ region : event.value }));
      this.allRegionWiseCountry$ = this.store.pipe(select(selectCountries)); 
      this.isDisabledFlag = false;
    } else if(event.type === this.SELECT_COUNTRY && event.value !== '') {
      this.getCountriesDetails$ = this.store.pipe(select(getCountriesDetails));
      this.getCountriesDetails$.subscribe(item=>{
        if(item && item.length > 0) { 
          this.selectedCountryDetailsArr = item.filter((item:any )=>
            item.numericCode === event.value
          )
        }
      });
    } else {
      this.allRegionWiseCountry$ = EMPTY;   
      this.isDisabledFlag = true;
    }
  }

}