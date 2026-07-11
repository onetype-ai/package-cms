onetype.AddonReady('ui.layouts', (layouts) =>
{
	layouts.Item({
		id: 'cms-sidebar',
		isActive: true,
		condition: {
			app: ['cms'],
			mode: ['content', 'manage'],
			callback: function()
			{
				return $ot.ui.modes.active()?.Get('id') !== 'content' || !this.cmsCollection;
			}
		},
		zone: 'root',
		slot: 'left',
		render: function()
		{
			this.tree = [
				{
					label: 'Blog',
					items: [
						{ icon: 'article', label: 'Posts', value: 'posts' },
						{ icon: 'person', label: 'Authors', value: 'authors' },
						{ icon: 'category', label: 'Categories', value: 'categories' },
						{ icon: 'sell', label: 'Tags', value: 'tags' }
					]
				},
				{
					label: 'Shop',
					items: [
						{ icon: 'inventory_2', label: 'Products', value: 'products' },
						{ icon: 'receipt_long', label: 'Orders', value: 'orders' },
						{ icon: 'group', label: 'Customers', value: 'customers' }
					]
				},
				{
					label: 'Site',
					items: [
						{ icon: 'web', label: 'Pages', value: 'pages' },
						{ icon: 'help', label: 'FAQ', value: 'faq' },
						{ icon: 'reviews', label: 'Testimonials', value: 'testimonials' }
					]
				}
			];

			this.pick = ({ value }) =>
			{
				value.value && $ot.ui.screens.open('cms.collection', { collection: value.value });
			};

			return `<e-navigation-sidebar title="Collections" :search="true" :items="tree" :active="cmsCollection" :_click="pick"></e-navigation-sidebar>`;
		}
	});
});
