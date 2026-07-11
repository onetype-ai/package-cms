onetype.AddonReady('ui.screens', (screens) =>
{
	screens.Item({
		id: 'cms.collection',
		route: ['/cms/content/:collection', '/cms/content/:collection/:view'],
		app: 'cms',
		mode: 'content',
		metadata: { addon: 'cms' },
		data: function()
		{
			return {
				cmsCollection: this.collection,
				cmsContentView: this.view ? this.view : 'table'
			};
		}
	});
});
