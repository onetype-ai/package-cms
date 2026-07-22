onetype.AddonReady('ui.screens', (screens) =>
{
    screens.Item({
        id: 'cms',
        route: '/cms',
        app: 'cms',
        metadata: { addon: 'cms' }
    });
});
