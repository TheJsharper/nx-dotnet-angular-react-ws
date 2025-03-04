import { importProvidersFrom } from '@angular/core';
import { Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { PlotlyViewComponent } from './plotly-view/plotly-view.component';
import { plotlyReducer } from './plotly-view/store/lib.ploty.reducers';
import { LibPlotkyService } from './plotly-view/services/lib-plotly.service';
import { plotlyResolver } from './plotly-view/routers/canMatch/ploty-resolver';

export const plotlyViewRoutes: Route[] = [
  {
    path: '',
    component: PlotlyViewComponent,
    providers: [

      importProvidersFrom(StoreModule.forFeature('plotly', plotlyReducer),), LibPlotkyService
    ],
    resolve: { ploty: plotlyResolver }
  }
];
