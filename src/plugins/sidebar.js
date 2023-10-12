import { registerPlugin } from '@wordpress/plugins';
import {
	PluginSidebar,
	PluginDocumentSettingPanel,
	PluginPostStatusInfo,
	PluginPrePublishPanel,
	PluginPostPublishPanel,
	PluginMoreMenuItem,
	PluginBlockSettingsMenuItem,
} from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

registerPlugin( 'blocks-u-plugin', {
	render: () => {
		return (
			<>
				<PluginDocumentSettingPanel
					title="My panel"
					icon="admin-collapse"
				>
					<p>Document Setting Panel</p>
				</PluginDocumentSettingPanel>
				<PluginPostStatusInfo>
					<p>Status info content</p>
				</PluginPostStatusInfo>
				<PluginPrePublishPanel title="Pre publish content">
					Pre publish content
				</PluginPrePublishPanel>
				<PluginPostPublishPanel title="Post publish content">
					Post publish content
				</PluginPostPublishPanel>
				<PluginMoreMenuItem
					icon="admin-customizer"
					// eslint-disable-next-line no-alert, no-undef
					onClick={ () => alert( true ) }
				>
					Plugin Extra Item
				</PluginMoreMenuItem>
				<PluginBlockSettingsMenuItem
					allowedBlocks={ [ 'core/paragraph' ] }
					icon="admin-home"
					label="New Item"
					// eslint-disable-next-line no-alert, no-undef
					onClick={ () => alert( true ) }
				/>
				<PluginSidebar
					name="meta-fields-sidebar"
					icon="admin-settings"
					title={ __( 'Post Options', 'blocks-u' ) }
				>
					hbiuhiihou
				</PluginSidebar>
			</>
		);
	},
} );
