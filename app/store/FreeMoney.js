Ext.define('SenchaMeetup.store.FreeMoney', {
    extend: 'Ext.data.Store',
    model: 'SenchaMeetup.model.FreeMoney',

    alias: 'store.freemoney',

    proxy: {
        type: 'ajax',
        url: 'app/data/free_money.json',
        reader : {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true
});
