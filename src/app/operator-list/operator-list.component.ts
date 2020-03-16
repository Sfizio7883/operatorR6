import { Component, OnInit, OnDestroy } from '@angular/core';
import { Operator } from '../models/operator.model';
import { Subscription } from 'rxjs';
import { OperatorsService } from '../services/operators.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.scss']
})
export class OperatorListComponent implements OnInit, OnDestroy {
  
  operators: Operator[];
  operatorsSubscription: Subscription;

  constructor(private operatorsService: OperatorsService, private router: Router) { }

  ngOnInit(): void {
    this.operatorsSubscription = this.operatorsService.operatorsSubject.subscribe(
      (operators: Operator[]) => {
        this.operators = operators;
      }
    );
    this.operatorsService.getOperators();
    this.operatorsService.emitOperators();
  }

  onNewOperator(){
    this.router.navigate(['/operators','new']);
  }
  onDeleteOperator(operator: Operator){
    this.operatorsService.removeOperators(operator);
  }
  onViewOperator(id : number){
    this.router.navigate(['/operators','view',id]);
  }
  ngOnDestroy(){
    this.operatorsSubscription.unsubscribe();
  }

}
