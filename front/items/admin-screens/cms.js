onetype.AddonReady('admin.screens', (screens) =>
{
    screens.Item({
        id: 'cms',
        route: '/cms',
        app: 'cms',
        metadata: { addon: 'cms' }
    });
});
