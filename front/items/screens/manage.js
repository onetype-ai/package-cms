onetype.AddonReady('ui.screens', (screens) =>
{
	screens.Item({
		id: 'cms.manage',
		route: '/cms/manage',
		app: 'cms',
		mode: 'manage',
		isDefault: true,
		metadata: { addon: 'cms' }
	});
});
