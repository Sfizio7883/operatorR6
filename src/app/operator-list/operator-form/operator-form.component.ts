import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OperatorsService } from 'src/app/services/operators.service';
import { Router } from '@angular/router';
import { Operator } from '../../models/operator.model';

@Component({
  selector: 'app-operator-form',
  templateUrl: './operator-form.component.html',
  styleUrls: ['./operator-form.component.scss']
})
export class OperatorFormComponent implements OnInit {

  operatorForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;
  constructor(private formBuilder: FormBuilder,
              private operatorsService: OperatorsService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    }

    initForm(){
      this.operatorForm = this.formBuilder.group({
        name: ['',Validators.required],
        role: ['',Validators.required]
      });
  }
  onSaveOperator(){
    const name = this.operatorForm.get('name').value;
    const role = this.operatorForm.get('role').value;
    const newOperator = new Operator(name,role);
    if(this.fileUrl && this.fileUrl !==''){
      newOperator.photo = this.fileUrl;
    }
    this.operatorsService.createNewOperators(newOperator);
    this.router.navigate(['/operators']);
  }

  onUploadFile(file: File){
    this.fileIsUploading = true;
    this.operatorsService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    )
  }

  detectFiles(event){
    this.onUploadFile(event.target.files[0]);
  }
}
