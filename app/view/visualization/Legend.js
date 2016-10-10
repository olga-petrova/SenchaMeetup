Ext.define('SenchaMeetup.view.visualization.Legend', {
    extend: 'Ext.d3.legend.Color',

    labelTemplate: '{0}',

    onUpdateItems: function (selection) {
        var me = this,
            items = me.getItems(),
            template = new Ext.Template(me.labelTemplate);

        this.callParent([selection]);
        selection.select('text')
            .text(function (d) {
                return template.apply([Ext.util.Format.number(d, '0,000')]);
            })
            .attr('x', items.size.x + 25);


    }

});
