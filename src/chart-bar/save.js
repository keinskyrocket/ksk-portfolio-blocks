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
	const BLOCK_CLASS = "wp-block-create-block-ksk-chart-bar"
	const { chartValue } = attributes;
	const chartBarStyles = { chartValue };

	const chartAnimation = {
		animation: `progress 2s normal`
	}

	console.log("TESTY: ", chartValue);

	return (
		<>
			<style>
				{
					`
						@keyframes progress {
							0% {width: 0}
							100% {width: ${chartValue}%}
						}	
					`
				}
			</style>

			<div { ...useBlockProps.save( { style: chartBarStyles } ) }>
				<div className={ BLOCK_CLASS + '__label' }>JavaScript</div>
				<div className={ BLOCK_CLASS + '__container' }>
					<div
						className={ BLOCK_CLASS + '__fill' }
						style={ chartAnimation }
					>
						{ chartValue + '%' }
					</div>
				</div>
			</div>
		</>
	);
}
