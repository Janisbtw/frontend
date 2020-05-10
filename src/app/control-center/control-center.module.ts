import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlCenterComponent } from './control-center.component';
import { ControlCenterSidebarComponent } from './control-center-sidebar/control-center-sidebar.component';
import { ControlCenterSidebarMenuComponent } from './control-center-sidebar-menu/control-center-sidebar-menu.component';
import { ControlCenterDevicePageComponent } from './control-center-device-page/control-center-device-page.component';
import { ControlCenterCreateDevicePageComponent } from './control-center-create-device-page/control-center-create-device-page.component';
import { ControlCenterSettingsPageComponent } from './control-center-settings-page/control-center-settings-page.component';
import { ControlCenterChangelogPageComponent } from './control-center-changelog-page/control-center-changelog-page.component';
import { ControlCenterSoundPageComponent } from './control-center-sound-page/control-center-sound-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ControlCenterGuard } from './control-center.guard';
import { ControlCenterService } from './control-center.service';
import { ControlCenterDevicePageHardwareResolverService } from './control-center-device-page/control-center-device-page-hardware-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: ControlCenterComponent,
    canActivate: [ControlCenterGuard],
    resolve: {
      devices: ControlCenterService
    },
    children: [
      {
        path: 'device',
        component: ControlCenterDevicePageComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: { hardware: ControlCenterDevicePageHardwareResolverService }
      },
      { path: 'create-device', component: ControlCenterCreateDevicePageComponent },
      { path: 'settings', component: ControlCenterSettingsPageComponent },
      { path: 'sound', component: ControlCenterSoundPageComponent },
      { path: 'changelog', component: ControlCenterChangelogPageComponent }
    ]
  }
];


@NgModule({
  declarations: [
    ControlCenterComponent,
    ControlCenterSidebarComponent,
    ControlCenterSidebarMenuComponent,
    ControlCenterDevicePageComponent,
    ControlCenterCreateDevicePageComponent,
    ControlCenterSettingsPageComponent,
    ControlCenterSoundPageComponent,
    ControlCenterChangelogPageComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild(routes)
  ]
})
export class ControlCenterModule {
}
