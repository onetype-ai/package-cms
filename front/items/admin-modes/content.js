onetype.AddonReady('admin.modes', (modes) =>
{
    modes.Item({
        id: 'content',
        condition: { app: ['cms'] },
        order: 2,
        icon: 'article',
        name: 'Content'
    });
});
