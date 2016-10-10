Ext.define('SenchaMeetup.store.IndustryTree', {
    extend: 'Ext.data.TreeStore',
    model: 'SenchaMeetup.model.IndustryTreeNode',
    requires: [
        'SenchaMeetup.reader.IndustryReader'
    ],

    alias: 'store.industrytree',

    pageSize: 100,
    proxy: {
        type: 'ajax',
        url: 'app/data/highest_paying_industries.json',
        reader: {
            type: 'industryreader'
        }
    },
    autoLoad: true,
    root: {
        text: "States"
    }
});
