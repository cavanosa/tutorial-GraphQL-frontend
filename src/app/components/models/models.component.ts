import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GET_MODELS } from 'src/app/graphql/queries.graphql';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  loading: boolean;
  models: any;
  private querySubscription: Subscription;

  constructor(
    private apollo: Apollo,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.loadModels(id);
  }

  loadModels(id: number): void {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_MODELS,
        variables: {
          brand_id: id
        }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.models = data.findModelsByBrandId;
      },
        err => {
          alert(err);
        }
      );
  }

}
