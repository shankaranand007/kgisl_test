import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './interceptors/app.http.interceptor';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
    MaterialModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
  ]
})

export class SharedModule { }
