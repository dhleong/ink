const segmenter = new Intl.Segmenter('en', {granularity: 'grapheme'});

export const countOfCharIn = ({
	text,
	char,
	start = 0,
	end = text.length,
}: {
	text: string;
	char: string;
	start?: number;
	end?: number;
}) => {
	if (text.length === 0) return 0;

	let count = 0;
	--start;
	while (true) {
		start = text.indexOf(char, start + 1);
		if (start === -1 || start >= end) {
			return count;
		}

		++count;
	}
};

/**
 * @return an Iterator over grapheme segments in `text`
 */
export const iterateGraphemeSegments = (text: string) => {
	return segmenter.segment(text);
};

/**
 * Given a byte index into a string, compute the "grapheme
 * index"---that is, how many graphemes proceed the byte index.
 */
export const byteIndexToGraphemeIndex = (
	text: string,
	byteIndex: number,
): number => {
	if (byteIndex <= 0) {
		return 0;
	}

	let graphemeIdx = 0;
	for (const {index} of iterateGraphemeSegments(text)) {
		if (index >= byteIndex) {
			break;
		}

		graphemeIdx++;
	}

	return graphemeIdx;
};
