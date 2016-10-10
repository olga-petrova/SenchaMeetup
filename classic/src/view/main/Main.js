/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SenchaMeetup.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'SenchaMeetup.view.main.MainController',
        'SenchaMeetup.view.main.MainModel',
        'SenchaMeetup.view.visualization.HighestPayingIndustriesTree',
        'SenchaMeetup.view.visualization.UStates'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

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
