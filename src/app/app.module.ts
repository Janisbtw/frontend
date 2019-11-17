import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DesktopComponent } from './desktop/desktop.component';
import { DesktopMenuComponent } from './desktop/desktop-menu/desktop-menu.component';
import { DesktopStartmenuComponent } from './desktop/desktop-startmenu/desktop-startmenu.component';
import { ContextMenuComponent } from './desktop/context-menu/context-menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { DesktopGuard } from './desktop/desktop.guard';
import { LoginGuard } from './login/login.guard';
import { SignUpGuard } from './sign-up/sign-up.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordConfirmValidatorDirective } from './sign-up/password-confirm-validator.directive';
import { PXtoViewWidthPipe } from './pxto-view-width.pipe';
import { PXtoViewHeightPipe } from './pxto-view-height.pipe';
import { WindowFrameComponent } from './desktop/window/window-frame.component';
import { WindowManagerComponent } from './desktop/window-manager/window-manager.component';
import { TestWindowComponent } from './desktop/windows/test-window/test-window.component';
import { TerminalComponent } from './desktop/windows/terminal/terminal.component';
import { WindowPlaceDirective } from './desktop/window/window-place.directive';
import { MinerComponent } from './desktop/windows/miner/miner.component';
import { SettingsComponent } from './desktop/windows/settings/settings.component';
import { TaskManagerComponent } from './desktop/windows/task-manager/task-manager.component';
import { HardwareShopComponent } from './desktop/windows/hardware-shop/hardware-shop.component';
import { HardwareShopItemComponent } from './desktop/windows/hardware-shop/hardware-shop-item/hardware-shop-item.component';
import { HardwareShopItemGridComponent } from './desktop/windows/hardware-shop/hardware-shop-item-grid/hardware-shop-item-grid.component';
import { HardwareShopHeaderComponent } from './desktop/windows/hardware-shop/hardware-shop-header/hardware-shop-header.component';
// tslint:disable-next-line:max-line-length
import { HardwareShopWalletEditComponent } from './desktop/windows/hardware-shop/hardware-shop-wallet-edit/hardware-shop-wallet-edit.component';
import { HardwareShopCartComponent } from './desktop/windows/hardware-shop/hardware-shop-cart/hardware-shop-cart.component';
import { HardwareShopCartItemComponent } from './desktop/windows/hardware-shop/hardware-shop-cart-item/hardware-shop-cart-item.component';

const routes: Routes = [
  { path: '', component: DesktopComponent, canActivate: [DesktopGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [SignUpGuard] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DesktopComponent,
    DesktopMenuComponent,
    DesktopStartmenuComponent,
    ContextMenuComponent,
    SignUpComponent,
    PasswordConfirmValidatorDirective,
    PXtoViewWidthPipe,
    PXtoViewHeightPipe,
    WindowFrameComponent,
    WindowManagerComponent,
    WindowPlaceDirective,
    TestWindowComponent,
    TerminalComponent,
    MinerComponent,
    SettingsComponent,
    TaskManagerComponent,
    HardwareShopComponent,
    HardwareShopItemComponent,
    HardwareShopItemGridComponent,
    HardwareShopHeaderComponent,
    HardwareShopWalletEditComponent,
    HardwareShopCartComponent,
    HardwareShopCartItemComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [TestWindowComponent, TerminalComponent, MinerComponent, SettingsComponent, TaskManagerComponent, HardwareShopComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
