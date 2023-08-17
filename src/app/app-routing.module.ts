import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { TreeComponent } from './tree/tree.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'student-details', component: StudentDetailsComponent},
  {path: 'student-details/:id/:name/:marks', component: StudentDetailsComponent},
  {path: 'student-marks', component: StudentMarksComponent},
  {path: 'add-student', component: StudentComponent},
  {path: 'tree', component: TreeComponent},
  {path: '**', component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
