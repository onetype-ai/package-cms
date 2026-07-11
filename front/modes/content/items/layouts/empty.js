onetype.AddonReady('ui.layouts', (layouts) =>
{
	layouts.Item({
		id: 'cms-content-empty',
		isActive: true,
		condition: {
			app: ['cms'],
			mode: ['content'],
			callback: function()
			{
				return !this.cmsCollection;
			}
		},
		zone: 'root',
		slot: 'center',
		render: function()
		{
			return `
				<div class="ot-flex-vertical ot-flex-1 ot-container-s ot-py-l">
					<e-status-empty icon="database" title="No collection selected" description="Pick a collection from the sidebar to browse and edit its entries."></e-status-empty>
				</div>
			`;
		}
	});
});
