import { Injectable } from '@angular/core';
import { Operator } from '../models/operator.model';
import { Subject } from 'rxjs';
import * as firebase  from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  operators: Operator[] = [];
  operatorsSubject = new Subject<Operator[]>();

  constructor() { }
  
  emitOperators(){
    this.operatorsSubject.next(this.operators);
  }

  saveOperators(){
    firebase.database().ref('/operators').set(this.operators);
  }

  getOperators(){
    firebase.database().ref('/operators')
    .on('value' , (data) => {
    this.operators = data.val() ? data.val() : [];
    this.emitOperators();
    });
  }

  getSingleOperators(id:number){
    return new Promise(
      (resolve,reject) => {
      firebase.database().ref('/operators/' + id).once('value').then(
        (data) => {
          resolve(data.val());
        }, (error) => {
          reject(error);
        }
      );
    }
    );
  }

  createNewOperators(newOperator: Operator){
    this.operators.push(newOperator);
    this.saveOperators();
    this.emitOperators();
  }

  removeOperators(operator: Operator){
    const operatorIndexToRemove = this.operators.findIndex(
      (operatorsEl) => {
        if(operatorsEl === operator){
          return true;
        }
      }
    );
    this.operators.splice(operatorIndexToRemove,1);
    this.saveOperators();
    this.emitOperators();
  }

  uploadFile(file: File){
    return new Promise(
      (resolve,reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('images/'+almostUniqueFileName+file.name)
          .put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement...');
          }, (error) => {
            console.log('Erreur de chargement: '+ error);
            reject();
          },
          () => {
            resolve(upload.snapshot.downloadURL);
            console.log('ok');
          }
        );
      }
    );
  }
}

