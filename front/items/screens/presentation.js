onetype.AddonReady('ui.screens', (screens) =>
{
	screens.Item({
		id: 'cms.presentation',
		route: '/cms/presentation',
		app: 'cms',
		mode: 'presentation',
		isDefault: true,
		metadata: { addon: 'cms' }
	});
});
