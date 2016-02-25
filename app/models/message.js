import DS from 'ember-data';
import ember from 'Ember';
export default DS.Model.extend (
    {
        conversation: DS.belongsTo ( 'conversation' ) ,
        time: DS.attr ( 'date' , {defaultValue: (new Date ()).toISOString ()} ) ,
        user: DS.belongsTo ( 'user' ) ,
        text: DS.attr () ,
        time: DS.attr ( 'date' , {defaultValue: (new Date ()).toISOString ()} )
    }
);

/*
const instance = {
    id: 2 ,
    _data: {
        conversation: 1 ,
        time: 1234453424356 ,
        user: 1 ,
        text: 'hello'
    } ,
    conversation: Ember.computed (
        '_data.conversation' , function () {
            return Ember.Object.create (
                Ember.PromiseProxyMixin , {
                    _data: null ,
                    promise: this.get ( 'store' ).findRecord ( 'conversation' , this.get ( '_data.conversation' ) )
                }
            )
        }
    )
};
let instance1old = Ember.object.create (
    {
        _data: {
            conversation: {
                name: null
            }
        } ,
        promise: Promise
    }
);
let instance1 = Ember.Object.create ( {} );
instance1.get = Ember.get.bind ( Ember , instance1 );
instance1.get ( 'conversation.name' );
Ember.get ( Ember , 'conversation.name' );
*/