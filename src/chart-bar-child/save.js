/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	const BLOCK_CLASS = "wp-block-create-block-ksk-chart-bar-child"
	const { chartLabel, chartValue } = attributes;

	return (
		<>
			<div { ...useBlockProps.save() }>
				<div className = { BLOCK_CLASS + '__label' }>
					{ chartLabel }
				</div>
				<div className = { BLOCK_CLASS + '__container' }>
					<div
						className = { BLOCK_CLASS + '__fill'}
						style = { { width: `${chartValue}%` } }
					>
						{ chartValue + '%' }
					</div>
				</div>
			</div>
		</>
	);
}
