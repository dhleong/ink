import {stripVTControlCharacters} from 'node:util';
import {lengthOf} from './iterable-utils.js';

const segmenter = new Intl.Segmenter('en', {granularity: 'grapheme'});

/**
 * @return an Iterator over grapheme segments in `text`
 */
export const iterateGraphemeSegments = (text: string) => {
	return segmenter.segment(text);
};

export const countNonAnsiGraphemes = (text: string) => {
	return lengthOf(iterateGraphemeSegments(stripVTControlCharacters(text)));
};
