### GitHub Interface Instructions

- [Retire content from the Rackspace How-To content repository on your local computer](#retire-content-from-the-rackspace-how-to-content-repository-on-your-local-computer)
- [Redirect the article to the retired notification page](#redirect-the-article-to-the-retired-notification-page)
- [Remove the article from the product index page](#remove-the-article-from-the-product-index-page)

### Retire content from the Rackspace How-To content repository on your local computer

1. On your PC, in the How-To repository clone, move the folder with the original article **index.md** file (and any associated images or assets) to the retired articles folder, **support-how-to/content/how-to/retired-articles**.

2. Remove both the `product:` and `product_url:` metadata fields from the retired article's **index.md** file.

3. Commit the changes and create a pull request.

4. Redirect the article to the retired notification page.  See the **Redirect the article to retired notification** section.

5. (Optional) If the product's index page lists the retired article, see the **Remove the article from the product\_index.md page** section.

After the pull request is ready, post a link in the Microsfot&reg; Teams "review-requests" channel in "Docs", for review and merge.

### Redirect the article to the retired notification page

This step redirects anyone trying to reach the old article link to the retired article notification page.

**Important:** Complete this step in the same PR as the one in which you retired the article.

1. Open **support-how-to/static/\_redirects** in your local How-To repository clone.

2. In the **Retired Articles** section, add a 404 line similar to the following example:

       /support/how-to/use-a-custom-kernel-with-pv-grub/  /how-to/article-retired/ 404

3. Commit the changes and push them up to the branch where you retired the article to update the PR.


### Remove the article from the product index page

This step is optional, and you should complete it only if the article is on the product's **\_index.md** page (the intro page or the landing page) for the topic.

**Important:** Complete this step in the same PR as the one in which you retired the article.

1. Locate and open `_index.md` found in the retired article's product folder.

2. Remove the reference with the article's link and alt text.

3. Commit the changes and push them up to the branch where you retired the article to update the PR.
