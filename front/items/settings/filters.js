onetype.AddonReady('modules.settings', (settings) =>
{
    settings.Item({
        id: 'cms.content.filters',
        label: 'Content filters',
        default: {},
        metadata: { addon: 'cms' },
        description: 'Filter state of the collection listing keyed by group id.'
    });
});
