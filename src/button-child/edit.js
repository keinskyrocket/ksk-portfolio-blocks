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
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, CheckboxControl } from '@wordpress/components';

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
	const {
		buttonLabel,
		buttonStyle,
		buttonLink,
		buttonWidth,
		buttonAlignment,
		isBlank
	} = attributes;

	const PROJECT_NAME = "ksk-button-child"
	
	const onChangeButtonLabel = (value) => {
		setAttributes({ 
			buttonLabel: value,
			buttonWidth: value.trim().length
		});
	};

	const onChangeButtonStyle = (value) => {
		setAttributes({ buttonStyle: value });
	};

	const onChangeButtonLink = (value) => {
		setAttributes({ buttonLink: value });
	};

	const onChangeButtonAlignment = (value) => {
		setAttributes({ buttonAlignment: value });
	};

	const onChangeIsBlank = (value) => {
		setAttributes({ isBlank: value });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Button Setting', PROJECT_NAME)} >
					<TextControl
						label={__('Label', PROJECT_NAME)}
						value={buttonLabel}
						onChange={onChangeButtonLabel}
						placeholder={__('Enter button label', PROJECT_NAME)}
					/>
					<SelectControl
						label={__('Style', PROJECT_NAME)}
						value={buttonStyle}
						onChange={onChangeButtonStyle}
						options={[
							{ value: '__primary', label: 'Primary' },
							{ value: '__secondary', label: 'Secondary' },
							{ value: '__text-arrow', label: 'Text + Arrow' },
						]}
					/>
					<TextControl
						label={__('Link', PROJECT_NAME)}
						help="Ensure the link starts with http:// or https://"
						value={buttonLink}
						onChange={onChangeButtonLink}
						placeholder={__('Enter URL', PROJECT_NAME)}
					/>
					<CheckboxControl
						label={__('Open in a new tab?', PROJECT_NAME)}
						checked={isBlank}
						onChange={onChangeIsBlank}
					/>
				</PanelBody>
				<PanelBody title={__('Button Alignment', PROJECT_NAME)} >
					<SelectControl
						label={__('Alignment', PROJECT_NAME)}
						value={buttonAlignment}
						onChange={onChangeButtonAlignment}
						options={[
							{ value: '', label: 'Default' },
							{ value: '__center', label: 'Center' },
						]}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<a
					href={buttonLink}
					target={isBlank ? "_blank" : null}
					rel={isBlank ? 'noopener noreferrer' : null}
					className={'ksk-button ksk-button' + buttonStyle + ' ksk-button' + buttonAlignment}
					style={{width: buttonWidth + 'rch'}}
				>
					{buttonLabel}
				</a>
			</div>
		</>
	);
}
