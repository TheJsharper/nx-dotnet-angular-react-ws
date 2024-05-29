import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompactType, DisplayGrid, Draggable, GridType, GridsterComponent, GridsterConfig, GridsterItem, GridsterItemComponent, GridsterItemComponentInterface, PushDirections, Resizable } from 'angular-gridster2';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections: PushDirections;
}
@Component({
  selector: 'lib-dashboard-drag-and-dropable',
  standalone: true,
  imports: [CommonModule, GridsterComponent, GridsterItemComponent, MatCheckboxModule, MatIconModule, MatMenuModule, FormsModule, MatFormFieldModule, MatSelectModule, MatButtonModule, RouterModule],
  templateUrl: './dashboard-drag-and-dropable.component.html',
  styleUrl: './dashboard-drag-and-dropable.component.scss',
})
export class DashboardDragAndDropableComponent implements OnInit {
  options!: Safe;
  dashboard!: Array<GridsterItem>;

  permission:"admin"| "user" = "admin";

  ngOnInit(): void {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      useBodyForBreakpoint: false,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true, 
      },
      resizable: {
        enabled: true
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };

    this.dashboard = [
      { cols: 1, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 0, x: 2, hasContent: true },
      { cols: 1, rows: 1, y: 0, x: 4, name:""},
      { cols: 1, rows: 1, y: 2, x: 5 },
      { cols: 1, rows: 1, y: 1, x: 0 },
      { cols: 1, rows: 1, y: 1, x: 0 },
       {
        cols: 1,
        rows: 1,
        y: 3,
        x: 5,
        minItemRows: 1,
        minItemCols: 1,
        label: 'Min rows & cols = 2'
      },
      {
        cols: 1,
        rows: 1,
        y: 2,
        x: 0,
        maxItemRows: 1,
        maxItemCols: 1,
        label: 'Max rows & cols = 2'
      }, 
      {
        cols: 1,
        rows: 1,
        y: 2,
        x: 2,
        label: 'Drag&Resize Enabled'
      },
    {
        cols: 1,
        rows: 1,
        y: 2,
        x: 4,
         dragEnabled: true,
        resizeEnabled: true,
        label: 'Drag&Resize Disabled'
      }, 
      { cols: 1, rows: 1, y: 2, x: 5 } 
    ];
  }

  changedOptions(): void {
    if (this.options!.api && this.options!.api.optionsChanged) {
      this.options!.api.optionsChanged();
      console.log("===>", this.options.draggable)
    }
  }

  changeUserPermission():void{
    if(this.permission === "user"){
      this.options = {
        gridType: GridType.Fit,
        compactType: CompactType.None,
        margin: 10,
        outerMargin: true,
        outerMarginTop: null,
        outerMarginRight: null,
        outerMarginBottom: null,
        outerMarginLeft: null,
        useTransformPositioning: true,
        mobileBreakpoint: 640,
        useBodyForBreakpoint: false,
        minCols: 1,
        maxCols: 100,
        minRows: 1,
        maxRows: 100,
        maxItemCols: 100,
        minItemCols: 1,
        maxItemRows: 100,
        minItemRows: 1,
        maxItemArea: 2500,
        minItemArea: 1,
        defaultItemCols: 1,
        defaultItemRows: 1,
        fixedColWidth: 105,
        fixedRowHeight: 105,
        keepFixedHeightInMobile: false,
        keepFixedWidthInMobile: false,
        scrollSensitivity: 10,
        scrollSpeed: 20,
        enableEmptyCellClick: false,
        enableEmptyCellContextMenu: false,
        enableEmptyCellDrop: false,
        enableEmptyCellDrag: false,
        enableOccupiedCellDrop: false,
        emptyCellDragMaxCols: 50,
        emptyCellDragMaxRows: 50,
        ignoreMarginInRow: false,
        draggable: {
          enabled: false, 
        },
        resizable: {
          enabled: false
        },
        swap: false,
        pushItems: false,
        disablePushOnDrag: false,
        disablePushOnResize: false,
        pushDirections: { north: false, east: false, south: false, west: false },
        pushResizeItems: false,
        displayGrid: DisplayGrid.Always,
        disableWindowResize: false,
        disableWarnings: false,
        scrollToNewItems: false
      };
      
    }else{
      this.options = {
        gridType: GridType.Fit,
        compactType: CompactType.None,
        margin: 10,
        outerMargin: true,
        outerMarginTop: null,
        outerMarginRight: null,
        outerMarginBottom: null,
        outerMarginLeft: null,
        useTransformPositioning: true,
        mobileBreakpoint: 640,
        useBodyForBreakpoint: false,
        minCols: 1,
        maxCols: 100,
        minRows: 1,
        maxRows: 100,
        maxItemCols: 100,
        minItemCols: 1,
        maxItemRows: 100,
        minItemRows: 1,
        maxItemArea: 2500,
        minItemArea: 1,
        defaultItemCols: 1,
        defaultItemRows: 1,
        fixedColWidth: 105,
        fixedRowHeight: 105,
        keepFixedHeightInMobile: false,
        keepFixedWidthInMobile: false,
        scrollSensitivity: 10,
        scrollSpeed: 20,
        enableEmptyCellClick: false,
        enableEmptyCellContextMenu: false,
        enableEmptyCellDrop: false,
        enableEmptyCellDrag: false,
        enableOccupiedCellDrop: false,
        emptyCellDragMaxCols: 50,
        emptyCellDragMaxRows: 50,
        ignoreMarginInRow: false,
        draggable: {
          enabled: true, 
        },
        resizable: {
          enabled: true
        },
        swap: false,
        pushItems: true,
        disablePushOnDrag: false,
        disablePushOnResize: false,
        pushDirections: { north: true, east: true, south: true, west: true },
        pushResizeItems: false,
        displayGrid: DisplayGrid.Always,
        disableWindowResize: false,
        disableWarnings: false,
        scrollToNewItems: false
      }
      if (this.options!.api && this.options!.api.optionsChanged) {
        this.options!.api.optionsChanged();
        console.log("===>", this.options.draggable)
      }
    }
  }
  removeItem($event: MouseEvent | TouchEvent, item:GridsterItem): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard!.splice(this.dashboard!.indexOf(item), 1);
  }

  addItem(): void {
    console.log("added")
   }
}
