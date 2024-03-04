import { Component, OnInit } from '@angular/core';
import { SwaggerService } from './swagger.service';

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.css']
})
export class AppComponent implements OnInit {

  formData:any={
    visionMission: '',
    broadObjectives: '',
    organizationalStructure: '',
    organogram: null,
    roleAndResponsibilities: '',
    boardOfGovernance: '',
    projectMonitoringUnit: '',
    landAvailability: null,
    landOwnershipCertificate: null,
    locationOfLand: null,
    latitude: null,
    longitude: null,
    certificateOfLocation: null,
    mapOfLand: null
  }
  files: any[] = [];
  collegeData: any;
  apiService: any;
  constructor(private _swaggerService:SwaggerService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
      const formData = new FormData();
  
      
      formData.append('visionMission', this.collegeData.visionMission);
      formData.append('broadObjectives', this.collegeData.broadObjectives);
      formData.append('organizationalStructure', this.collegeData.organizationalStructure);
      formData.append('roleAndResponsibilities', this.collegeData.roleAndResponsibilities);
      formData.append('boardOfGovernance', this.collegeData.boardOfGovernance);
      formData.append('projectMonitoringUnit', this.collegeData.projectMonitoringUnit);
      formData.append('landAvailability', this.collegeData.landAvailability);
      formData.append('latitude', this.collegeData.latitude);
      formData.append('longitude', this.collegeData.longitude);
  
      
      this.files.forEach(file => {
        formData.append(file.name, file);
      });
  
      
      this.apiService.saveCollegeData(formData).subscribe(
        (        response: any) => {
          console.log('Data saved successfully:', response);
          
        },
        (        error: any) => {
          console.error('Error occurred:', error);
         
        }
      );
    }
  
    onFileSelected(event: any) {
      this.files.push(...event.target.files);
    }
  }

