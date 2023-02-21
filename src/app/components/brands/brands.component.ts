import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { GET_BRANDS } from 'src/app/graphql/queries.graphql';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit, OnDestroy {
  

  loading: boolean;
  brands: any;
  private querySubscription: Subscription;

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_BRANDS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.brands = data.findAllBrands
      });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

}
