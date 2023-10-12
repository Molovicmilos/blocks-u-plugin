import { registerPlugin } from '@wordpress/plugins';
import {
	PluginSidebar,
	/* PluginDocumentSettingPanel,
	PluginPostStatusInfo,
	PluginPrePublishPanel,
	PluginPostPublishPanel,
	PluginMoreMenuItem,
	PluginBlockSettingsMenuItem, */
} from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';

const MetaFieldsInputs = () => {
	const subtitleValue = useSelect( ( select ) => {
		return (
			select( 'core/editor' ).getEditedPostAttribute( 'meta' )
				?._blocks_u_post_subtitle || ''
		);
	} );
	const { editPost } = useDispatch( 'core/editor' );
	return (
		<PanelBody title={ __( 'Subtitle Options', 'blocks-u' ) }>
			<TextControl
				label={ __( 'Subtitle Options', 'blocks-u' ) }
				value={ subtitleValue }
				onChange={ ( value ) =>
					editPost( {
						meta: { _blocks_u_post_subtitle: value },
					} )
				}
			/>
		</PanelBody>
	);
};

registerPlugin( 'blocks-u-plugin', {
	render: () => {
		return (
			<>
				{ /* <PluginDocumentSettingPanel
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
				/> */ }
				<PluginSidebar
					name="meta-fields-sidebar"
					icon="admin-settings"
					title={ __( 'Post Options', 'blocks-u' ) }
				>
					<MetaFieldsInputs />
				</PluginSidebar>
			</>
		);
	},
} );
