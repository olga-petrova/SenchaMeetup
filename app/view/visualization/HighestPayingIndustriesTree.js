/**
 * This view is an example list of people.
 */
Ext.define('SenchaMeetup.view.visualization.HighestPayingIndustriesTree', {
    extend: 'Ext.d3.hierarchy.tree.HorizontalTree',
    xtype: 'highest-paying-industries-tree',

    requires: [
        'SenchaMeetup.store.IndustryTree',
        'Ext.d3.hierarchy.tree.HorizontalTree',
        'Ext.d3.interaction.PanZoom'
    ],
    bind: {
        store: {
            type: 'industrytree'
        }
    },
    height: 1000,
    width: 1500,
    nodeText: function (element, record) {
        var value = record.get('text');
        if (!Ext.isEmpty(record.get('salary'))) {
            value += ' ($ ' + Ext.util.Format.number(record.get('salary'), '0,000') + ')';
        }
        return value;
    },
    nodeSize: [30, 250],
    nodeRadius: 10,
    colorAxis: {
        field: 'id'
    },
    interactions: {
        type: 'panzoom',
        zoom: {
            extent: [0.3, 3],
            doubleTap: false
        }
    },
    tooltip: {
        renderer: 'onTooltip'
    },
    platformConfig: {
        desktop: {
            nodeSize: [20, 250],
            nodeRadius: 5
        }
    }


});

