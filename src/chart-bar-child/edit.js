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
import { PanelBody, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import NumberControl from '../components/number-control';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const BLOCK_CLASS = "wp-block-create-block-ksk-chart-bar-child"
	const PROJECT_NAME = "ksk-chart-bar-child";

	const { chartLabel, chartValue } = attributes;

	const onChangeChartLabel = ( value ) => {
		setAttributes( { chartLabel: value } ); 
	};

	const onChangeChartValue = ( value ) => {
		setAttributes( { chartValue: value } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Skill Info">
					<TextControl
            label = { __( 'Skill Label', PROJECT_NAME ) }
            value = { chartLabel }
            onChange = { onChangeChartLabel }
          />
					<NumberControl
						label = { __( 'Chart Value', PROJECT_NAME ) }
						value = { chartValue }
						onChange = { onChangeChartValue }
						min = { 0 }
						max = { 100 }
						step = { 10 }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() } >
				<div className = { BLOCK_CLASS + '__label' }>
					{ chartLabel }
				</div>
				<div className = { BLOCK_CLASS + '__container' }>
					<div
						className = { BLOCK_CLASS + '__fill' }
						// style={ chartAnimation }
						style = { { width: `${chartValue}%` } }
					>
						{ chartValue + '%' }
					</div>
				</div>
			</div>
		</>
	);
}
