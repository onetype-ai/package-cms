onetype.AddonReady('ui.screens', (screens) =>
{
    screens.Item({
        id: 'cms.content',
        route: '/cms/content',
        app: 'cms',
        mode: 'content',
        isDefault: true,
        metadata: { addon: 'cms' }
    });
});
