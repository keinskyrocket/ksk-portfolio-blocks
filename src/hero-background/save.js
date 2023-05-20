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
	const imageURL = "../wp-content/plugins/ksk-portfolio-blocks/src/hero-background/images/";
	
	return (
		<div { ...useBlockProps.save() }>
			<div className="wp-block-create-block-ksk-hero-background__bottom">
				<img src={`${imageURL}img_face_bottom.svg`} />
			</div>
			<div className="wp-block-create-block-ksk-hero-background__top">
				<img src={`${imageURL}img_face_top.svg`} />
			</div>
		</div>
	);
}
