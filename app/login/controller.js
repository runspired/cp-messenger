import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session')
	email: null, 
	password: null,
	actions: [
	login (email, password){
		this.get('session').open("firebase", options)
		then.(function(data){
			debugger;
		});
	}]
});