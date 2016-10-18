/**
 * Created by zhailei on 16/9/20.
 */
var parent = 'radio'
var id = 'Radio';
var template = '<div class="list-block list-block-'+id+'">\
                    <div class="list-block-h">Radio</div>\
                    <div class="list-block-w">\
                      <div class="list-item-region"></div>\
                    </div>\
                 </div>'
module.exports = {
  id:id,
  template:template,
  callBack:function(){
    var model = new Backbone.Model({
      Text:'Paris'
    });
    var form = new Jma.Components.Form.editors.iRadio({
      model:model,
      key:'Text',
      schema:{
      }
    })
    var MyView = Marionette.LayoutView.extend({
      el:'.list-block-'+id,
      regions: {
        mainRegion:'.list-item-region'
      }
    });
    var view = new MyView();
    view.mainRegion.show(form);

  }
}
