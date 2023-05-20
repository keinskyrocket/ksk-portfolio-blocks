/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const PROJECTNAME = "ksk-card";
	const ALLOWED_BLOCKS = [ 'create-block/ksk-card-child' ];
	const TEMPLATE = [
		[ 'create-block/ksk-card-child' ]
	];

	const { flexDirection } = attributes;

	const onChangeFlexDiresction = (value) => {
		setAttributes({ flexDirection: value })
	}

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label = { __( 'Content Direction', PROJECTNAME ) }
						onChange = { onChangeFlexDiresction }
						value = { flexDirection }
						options = { [
							{
								label: 'Column',
								value: 'column-style',
							},
							{
								label: 'Row',
								value: 'row-style',
							},
						] }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<InnerBlocks
					allowedBlocks = { ALLOWED_BLOCKS }
					template = { TEMPLATE }
					className = { flexDirection }
				/>
			</div>
		</>
	);
}
