const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = [
	'image/jpeg',
	'image/jpg',
	'image/png',
	'image/gif',
	'image/webp'
];

export const validateFile = (file: File): string | null => {
	if (file.size > MAX_FILE_SIZE) {
		return `File size must be less than ${MAX_FILE_SIZE / (1024 * 1024)}MB`;
	}
	if (!ALLOWED_FILE_TYPES.includes(file.type)) {
		return 'Only JPEG, PNG, GIF, and WebP images are allowed';
	}
	return null;
};
