import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const HighlightFormatButton = ( { isActive, value, onChange } ) => {
	return (
		<RichTextToolbarButton
			icon="edit"
			title={ __( 'Highlight', 'blocks-u' ) }
			onClick={ () => {
				onChange(
					toggleFormat( value, {
						type: 'blocks-u/highlight',
						attributes: {
							style: 'background-color: #f0ff00',
						},
					} )
				);
			} }
			isActive={ isActive }
		/>
	);
};

registerFormatType( 'blocks-u/highlight', {
	title: __( 'Highlight', 'blocks-u' ),
	tagName: 'span',
	className: 'yellow-text',
	edit: HighlightFormatButton,
} );
