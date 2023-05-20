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
export default function save() {
	const imageURL = "../wp-content/plugins/ksk-portfolio-blocks/src/hero-expertise/images/";

	return (
		<div { ...useBlockProps.save() }>
			<div className="wp-block-create-block-ksk-hero-expertise__left">
				<div className="icon-piece float-animation__01">
					<img src={`${imageURL}icon_piece_left.svg`} />
				</div>
			</div>
			<div className="wp-block-create-block-ksk-hero-expertise__right">
				<div className="icon-piece float-animation__01">
					<img src={`${imageURL}icon_piece_right.svg`} />
				</div>
			</div>
			<div className="wp-block-create-block-ksk-hero-expertise__center">
				<div className="icon-piece float-animation__01">
					<img src={`${imageURL}icon_piece_center.svg`} />
				</div>
			</div>
		</div>
	);
}
