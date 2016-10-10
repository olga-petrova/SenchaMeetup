/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('SenchaMeetup.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'SenchaMeetup.view.main.MainController',
        'SenchaMeetup.view.main.MainModel',
        'SenchaMeetup.view.visualization.HighestPayingIndustriesTree',
        'SenchaMeetup.view.visualization.UStates'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [{
        title: 'Best states',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'panel',
            title: 'Best states',
            items: [

                {
                    xtype: 'ustatesvisualization',
                    bind: {
                        store: {
                            type: 'freemoney'
                        }
                    },
                    colorAxis: {
                        scale: {
                            type: 'linear',
                            range: ["#789add", "#f17150"]
                        },
                        field: 'free_money'
                    },
                    mapAxis: {
                        field: 'state'
                    },
                    legend: {
                        docked: 'right',
                        padding: 50,
                        items: {
                            count: 5,
                            slice: [1],
                            reverse: true,
                            size: {
                                x: 60,
                                y: 30
                            }
                        }
                    },
                    legendRect: {
                        x: 700,
                        y: 400,
                        width: 350,
                        height: 200
                    }
                }

            ]
        }]
    }, {
        xtype: 'panel',
        iconCls: 'fa-users',
        title: 'Highest-paying industries',
        layout: 'fit',
        items: [
            {
                xtype: 'highest-paying-industries-tree'
            }
        ]
    }]
});
