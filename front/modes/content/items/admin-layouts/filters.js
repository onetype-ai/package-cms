onetype.AddonReady('admin.layouts', (layouts) =>
{
    layouts.Item({
        id: 'cms-content-filters',
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
        slot: 'left',
        render: function()
        {
            this.back = () =>
            {
                $ot.admin.screens.open('cms.content');
            };

            this.change = ({ value }) =>
            {
                platform.settings.set('cms.content.filters', value);
            };

            return `
                <div class="ot-flex-vertical ot-gap-m ot-p-m">
                    <e-admin-form-button icon="arrow_back" label="All collections" tone="soft" :stretch="true" :_click="back"></e-admin-form-button>
                    <div class="ot-flex-1 ot-scrollbar">
                        <e-admin-data-filters :value="state.settings['cms.content.filters']" :_change="change"></e-admin-data-filters>
                    </div>
                </div>
            `;
        }
    });
});
