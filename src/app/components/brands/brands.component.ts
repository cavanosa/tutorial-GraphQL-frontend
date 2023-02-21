import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
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
  brandsQuery: QueryRef<any>;

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
    this.brandsQuery =  this.apollo
    .watchQuery<any>({
      query: GET_BRANDS,
    });
    this.querySubscription = this.brandsQuery
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.brands = data.findAllBrands;
        this.refresh();
      });
  }

  refresh(): void {
    this.brandsQuery.refetch();
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

}
