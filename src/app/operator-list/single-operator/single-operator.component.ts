import { Component, OnInit } from '@angular/core';
import { Operator } from 'src/app/models/operator.model';
import { Router, ActivatedRoute } from '@angular/router';
import { OperatorsService } from 'src/app/services/operators.service';

@Component({
  selector: 'app-single-operator',
  templateUrl: './single-operator.component.html',
  styleUrls: ['./single-operator.component.scss']
})
export class SingleOperatorComponent implements OnInit {

  operator: Operator;

  constructor(private router: Router,
              private operatorsService: OperatorsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.operator = new Operator('','');
    const id = this.route.snapshot.params['id'];
    this.operatorsService.getSingleOperators(+id).then(
      (operator: Operator) => {
        this.operator = operator;
      }
    );
  }

  onBack(){
    this.router.navigate(['/operators']);
  }
}
