import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterComponent, GridsterConfig, GridsterItem, GridsterItemComponent, GridsterItemComponentInterface } from 'angular-gridster2';

@Component({
  selector: 'lib-dashboard-drag-and-dropable',
  standalone: true,
  imports: [CommonModule, GridsterComponent, GridsterItemComponent],
  templateUrl: './dashboard-drag-and-dropable.component.html',
  styleUrl: './dashboard-drag-and-dropable.component.scss',
})
export class DashboardDragAndDropableComponent implements OnInit {

  options!: GridsterConfig;
  dashboard!: Array<GridsterItem>;
  constructor() {



  }

  static itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      itemChangeCallback: DashboardDragAndDropableComponent.itemChange,
      itemResizeCallback: DashboardDragAndDropableComponent.itemResize,
    };

    this.dashboard = [
      { cols: 2, rows: 10, y: 0, x: 0 },
      { cols: 2, rows: 20, y: 0, x: 2 }
    ];
  }

  changedOptions() {
    if (this.options && this.options.api && this.options.api.optionsChanged)
      this.options.api.optionsChanged();
  }

  removeItem(item:GridsterItem) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
   // this.dashboard.push({});
  }

}
