import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
;

import './main.html';

Tracker.autorun(function(){
  Meteor.subscribe('emps')
})
Template.form.events({
  "submit #insert-form":function(e,t){
    e.preventDefault();
   
      var name = t.find("#name").value;
      var salary = t.find("#salary").value;
      emp.insert({name:name,salary:salary,details:[{fullname:"Shubham Tiwari",dob:"0-0-0"}]});
  }
});

Template.form.helpers({
  "records":function(){
    return emp.find().fetch();
  }
})