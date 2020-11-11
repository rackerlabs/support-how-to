HUGO_VERSION ?= 0.78.1
HUGO_EXTENDED = "extended_"
CONTAINER_RUNTIME ?= docker
# Show build warnings, posts tagged as draft, and posts with a future date
PREVIEW_ARGS = --path-warnings --verbose --buildDrafts --buildFuture

install: checkDep
	@echo Installing AsciiDoctor
	@gem install bundler
	@npm install
	@bundle install

checkDep:
	@echo Checking Dependencies
	@command -v hugo > /dev/null && hugo version || (echo "Error hugo is not detected. Hugo needs to be installed and the 'hugo' binary available on the path"; exit 1)
	@command -v gem > /dev/null && printf "Gem " && gem -v || (echo "Error gem is not detected. The Ruby 'gem' command needs to be on the path"; exit 1)

# Preview build for local builds and Netlify previews
build-preview:
	@echo Deleting public \(build output\) directory
	@rm -rf public
	@hugo version
	hugo $(PREVIEW_ARGS)

# Production build in Netlify
build:
	rm -rf public
	@hugo version
	hugo

serve:
	@hugo $(PREVIEW_ARGS) serve

# Targets used to build and use the Hugo+Asciidoctor+Rst docker image

.PHONY: hugo-docker
hugo-docker:
	${CONTAINER_RUNTIME} build --build-arg HUGO_VERSION=${HUGO_VERSION} -t support-how-to/hugo:${HUGO_VERSION} hugo

.PHONY: hugo-serve
hugo-serve: hugo-docker
	@mkdir -p ./resources/_gen/images && mkdir -p ./resources/_gen/assets
	@${CONTAINER_RUNTIME} run -t -i --sig-proxy=true --rm --mount type=bind,src=$(shell pwd),dst=/site \
		-w /site -p 1313:1313 support-how-to/hugo:${HUGO_VERSION} /hugo serve $(PREVIEW_ARGS) \
		--baseURL "http://localhost:1313/" --bind 0.0.0.0 --disableFastRender
	@rm -rf ./resources
