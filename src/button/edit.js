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
	const ALLOWED_BLOCKS = [ 'create-block/ksk-button-child' ];
	const TEMPLATE = [
		[ 'create-block/ksk-button-child' ]
	];

	const { buttonAlignment } = attributes;

	const PROJECT_NAME = "ksk-button"

	const onChangeButtonAlignment = (value) => {
		setAttributes({ buttonAlignment: value })
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label={__('Alignment', PROJECT_NAME)}
						value={buttonAlignment}
						onChange={onChangeButtonAlignment}
						options={[
							{ value: 'normal', label: 'Default' },
							{ value: 'center', label: 'Center' },
						]}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{ ...useBlockProps() }
				style={{ justifyContent: buttonAlignment }}
			>
				<InnerBlocks
					allowedBlocks = { ALLOWED_BLOCKS }
					template = { TEMPLATE }
				/>
			</div>
		</>
	);
}
