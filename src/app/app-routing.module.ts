import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { CreateBubbleComponent } from './componentes/create-bubble/create-bubble.component';
import { GeneralProfileComponent } from './componentes/general-profile/general-profile.component';
import { BubbleProfileComponent } from './componentes/bubble-profile/bubble-profile.component';


const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "bubble/criar", component: CreateBubbleComponent },
  { path: "profile", component: GeneralProfileComponent },
  { path: "bubble/profile", component: BubbleProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
