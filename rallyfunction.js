        Rally.onReady(function() {
            Ext.define('Rally.example.SimpleGrid', {
                extend: 'Rally.app.App',
                componentCls: 'app',
            
                launch: function() {
                    this.add({
                        xtype: 'rallygrid',
                        columnCfgs: [
                            'FormattedID',
                            'Name',
                            'Owner'
                        ],
                        context: this.getContext(),
                        enableEditing: false,
                        showRowActionsColumn: false,
                        storeConfig: {
                            model: 'userstory'
                        }
                    });
                }
            });
            

            Rally.launchApp('Rally.example.SimpleGrid', {
              name: 'Grid Example'
            });
        });