import React from 'react';
import {type CursorShape} from '../cursor-helpers.js';

export type Props = {
	readonly shape?: CursorShape;
};

/**
 * Alternative to useCursor hook that may be placed inline amongst
 * `<Text>` elements to determine cursor position implicitly based
 * on text wrapping, etc.
 */
export default function Cursor({shape}: Props) {
	return <ink-text internal_cursorOffset={0} internal_cursorShape={shape} />;
}
