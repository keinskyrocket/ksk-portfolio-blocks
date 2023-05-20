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
export default function Edit( { attributes, setAttributes } ) {
	const PROJECTNAME = "ksk-card-child";

	const dummyText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.";
	const { experienceType } = attributes;
	
	const ALLOWED_BLOCKS = [ 'core/heading', 'core/paragraph', 'core/list', 'core/image', 'create-block/ksk-button' ];
	const TEMPLATE = [
			[ 'core/heading', { level: 4, placeholder: 'Heading h4' } ],
			[ 'core/heading', { level: 6, placeholder: 'Heading h6' } ],
			[ 'core/paragraph', { placeholder: 'Sub Label' } ],
			[ 'core/paragraph', { placeholder: dummyText } ]
	];


	const onChangeExperienceTyep = ( value ) => {
		setAttributes( { experienceType: value } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label = { __( 'Experience Type', PROJECTNAME ) }
						onChange = { onChangeExperienceTyep }
						value = { experienceType }
						options = { [
							{
								label: 'Work Experience',
								value: 'work-experience',
							},
							{
								label: 'Education',
								value: 'education',
							},
							{
								label: 'Interim',
								value: 'interim',
							},
							{
								label: 'No Category',
								value: 'no-category',
							},
						] }
					/>
				</PanelBody>
			</InspectorControls>

			<article
				{ ...useBlockProps() }
				data-card-type = { 'is-' + experienceType }
			>
				<i className = "ksk-icon ksk-icon-tag">
					{ experienceType.replace( '-', ' ' ) }
				</i>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } template = { TEMPLATE } />
			</article>
		</>
	);
}
