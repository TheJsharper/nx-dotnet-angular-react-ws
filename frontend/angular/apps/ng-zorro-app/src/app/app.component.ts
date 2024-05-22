import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import { AccountBookFill, AlertFill, AlertOutline, MenuFoldOutline, MenuUnfoldOutline, TeamOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSliderModule } from 'ng-zorro-antd/slider';

const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill, MenuFoldOutline, MenuUnfoldOutline, TeamOutline, UserOutline];
@NgModule({
  exports: [NzIconModule],
  imports: [NzIconModule.forChild(icons), CommonModule]
})
export class IConModule { }

@Component({
  standalone: true,
  imports: [
    RouterModule, NzButtonModule,NzLayoutModule, NzSliderModule,
    NzBreadCrumbModule,
    IConModule, NzMenuModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-zorro-app';
  isCollapsed = false;
}

