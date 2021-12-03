import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';

import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [],
  exports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTreeModule,
    OverlayModule,
    PortalModule,
  ]
})
export class SharedModule { }
