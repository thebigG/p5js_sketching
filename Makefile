run-dev:
	npm run start
build:
	npm run build
check-format:
	npx prettier --check .
format:
	npx prettier -w .

build_image: 
	docker build . -t p5js_sketching:p5js_sketching

clean:
	- rm -r node_modules || true
	- rm -r dist || true
