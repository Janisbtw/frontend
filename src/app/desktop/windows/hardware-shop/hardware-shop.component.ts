import { AfterViewChecked, Component, ElementRef, Type, ViewChild } from '@angular/core';

import { WindowComponent, WindowDelegate } from '../../window/window-delegate';
import { HardwareShopService } from './hardware-shop.service';

@Component({
  selector: 'app-hardware-shop',
  templateUrl: './hardware-shop.component.html',
  styleUrls: ['./hardware-shop.component.scss']
})
export class HardwareShopComponent extends WindowComponent implements AfterViewChecked {

  protected walletSettingsPopup: boolean;
  protected cardVisibility: boolean;
  protected morphCoins: number;

  protected width: number;
  protected height: number;

  @ViewChild('hardwareShop', { static: false })
  private hardwareShop: ElementRef;

  protected items: HardwarePart[];

  constructor(private hardwareShopService: HardwareShopService) {
    super();
    this.walletSettingsPopup = false;
    this.cardVisibility = false;
    this.loadMorphCoins();
    this.hardwareShopService.getHardwareParts()
      .then(data => this.items = data)
      .catch(() => this.items = []);
  }

  ngAfterViewChecked(): void {
    this.width = this.hardwareShop.nativeElement.offsetWidth;
    this.height = this.hardwareShop.nativeElement.offsetHeight;
  }

  private loadMorphCoins(): void {
    this.hardwareShopService.getMorphCoins()
      .then(data => this.morphCoins = data)
      .catch(() => this.morphCoins = -1);
  }

  protected setWalletSettingsStatus(status: boolean) {
    if (status === false) {
      this.loadMorphCoins();
    }
    this.walletSettingsPopup = status;
  }

  protected setCardVisibility(status: boolean) {
    this.cardVisibility = status;
  }
}

export class HardwareShopWindowDelegate extends WindowDelegate {
  title = 'Hardware-Shop';
  icon = 'assets/desktop/img/hardware-shop.svg';
  type: Type<any> = HardwareShopComponent;
}

export interface HardwarePart {
  name: string;
  price: number;
  number?: number;
}
