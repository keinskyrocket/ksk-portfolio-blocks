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
	const PROJECTNAME = "ksk-wrapper";

	const { screenWidth } = attributes;

	const onChangeScreenWidth = (value) => {
		setAttributes({ screenWidth: value });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label={__('Width', PROJECTNAME)}
						value={screenWidth}
						onChange={onChangeScreenWidth}
						options={[
							{
								label: "Default",
								value: ""
							},
							{
								label: "Max width - 640px",
								value: "640px"
							},
							{
								label: "Max width - 720px",
								value: "720px"
							},
							{
								label: "Max width - 1040px",
								value: "1040px"
							},
							{
								label: "Full width",
								value: "100%"
							}
						]}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()}>
				<div
					className="inner"
					style={{ maxWidth: screenWidth }}
				>
					<InnerBlocks placeholder="-- Insert blocks --" />
				</div>
			</section>
		</>
	);
}
