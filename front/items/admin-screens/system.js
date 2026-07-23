onetype.AddonReady('admin.screens', (screens) =>
{
    screens.Item({
        id: 'cms.system',
        route: '/cms/system',
        app: 'cms',
        mode: 'system',
        isDefault: true,
        metadata: { addon: 'cms' }
    });
});
