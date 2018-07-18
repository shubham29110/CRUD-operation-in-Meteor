import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('emps',function(){
    return emp.find({});
  });
  emp.allow({
    insert:function(userId,doc){
      return true;
    },
    update:function(userId,doc,fields,modifiers){
        return true;
    },
    remove:function(userId,doc){
        return false;
    }
  });
});
