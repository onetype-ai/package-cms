onetype.AddonReady('ui.layouts', (layouts) =>
{
	layouts.Item({
		id: 'cms-content-collection',
		isActive: true,
		condition: {
			app: ['cms'],
			mode: ['content'],
			callback: function()
			{
				return !!this.cmsCollection;
			}
		},
		zone: 'root',
		slot: 'center',
		render: function()
		{
			this.views = [
				{ id: 'table', icon: 'table' },
				{ id: 'grid', icon: 'grid_on' },
				{ id: 'cards', icon: 'cards' },
				{ id: 'list', icon: 'list' },
				{ id: 'board', icon: 'view_kanban' },
				{ id: 'calendar', icon: 'calendar_month' },
				{ id: 'gallery', icon: 'photo_library' },
				{ id: 'timeline', icon: 'timeline' },
				{ id: 'tree', icon: 'account_tree' },
				{ id: 'map', icon: 'map' }
			];

			this.pick = ({ value }) =>
			{
				$ot.ui.screens.open('cms.collection', { collection: this.cmsCollection, view: value });
			};

			this.stage = () =>
			{
				return elements.Render('views-' + this.cmsContentView, {}).Element;
			};

			return `
				<div class="ot-flex-vertical ot-gap-m ot-p-m">
					<div class="ot-flex-end">
						<e-navigation-tabs tone="contained" :items="views" :active="cmsContentView" :_change="pick"></e-navigation-tabs>
					</div>
					<div class="ot-flex-1 ot-scrollbar">
						<div ot-node="stage()" :ot-key="cmsContentView"></div>
					</div>
				</div>
			`;
		}
	});
});
