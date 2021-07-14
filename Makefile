HUGO_VERSION ?= 0.84.2
HUGO_EXTENDED = "extended_"
# Show build warnings, posts tagged as draft, and posts with a future date
PREVIEW_ARGS = --path-warnings --verbose --buildDrafts --buildFuture

install: checkDep
	@echo Installing AsciiDoctor
	@gem install bundler
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
