install:
	npm ci

start brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
