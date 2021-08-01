import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnglishComponent } from './english/english.component';
import { SpanishComponent } from './spanish/spanish.component';

const routes: Routes = [
  { path: '', component: SpanishComponent },
  { path: 'es', component: SpanishComponent },
  { path: 'en', component: EnglishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
