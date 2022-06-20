import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditDepartmentComponent } from './components/departments/edit-department/edit-department.component';
import { AddDepartmentComponent } from './components/departments/add-department/add-department.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { JobInfoComponent } from './components/job-info/job-info.component';
import { JobFormComponent } from './containers/job-form/job-form.component';

import { JobService } from './services/job-service';
import { EmployeeService } from './services/employee-service';
import { CandidateService } from './services/candidate-service';
import { DepartmentService } from './services/department-service';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSnackBarModule, MatTableModule } from '@angular/material';

import { NavbarWrapperComponent } from './navbar/navbar-wrapper/navbar-wrapper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarWrapperComponent,
    DashboardComponent, 
    JobInfoComponent, 
    JobsComponent, 
    JobFormComponent,
    EmployeesComponent, 
    EmployeesComponent, 
    DepartmentsComponent, 
    CandidatesComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // NG Material Modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [
    JobService,
    DepartmentService,
    CandidateService,
    EmployeeService
  ],
  entryComponents: [
    AddDepartmentComponent, 
    EditDepartmentComponent, 
    AddEmployeeComponent, 
    EditEmployeeComponent
  ]
})
export class DashboardModule { }