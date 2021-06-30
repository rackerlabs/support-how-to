- [Contributing to the Rackspace How-To content repository](#contributing-to-the-rackspace-how-to-content-repository)
	- [Getting started with GitHub](#getting-started-with-github)
		- [Create a fork of this repository](#create-a-fork-of-this-repository)
		- [Keeping your fork up to date](#keeping-your-fork-up-to-date)
	- [Creating and changing articles](#creating-and-changing-articles)
		- [Create an article](#create-an-article)
		   - [Using article templates](#using-article-templates)
		- [Edit an article](#edit-an-article)
		- [Make a change to a PR](#make-a-change-to-a-pr)
		- [Request an article change](#request-an-article-change)
		- [Retire an article](#retire-an-article)
		- [Redirect an article](#redirect-an-article)
	- [Writing guidelines](#writing-guidelines)
	- [Support and feedback](#support-and-feedback)
	- [How-to products](#how-to-products)
	- [Metadata-sample](#metadata-sample)

**Important:** You need to log in to public GitHub, not the enterprise GitHub,
to contribute. If you have questions, contact us at [how-to@rackspace.com](mailto:how-to@rackspace.com).

## Contributing to the Rackspace How-To content repository

This file describes the general process for maintaining source code for content
published at [https://docs.rackspace.com/support/how-to/](https://docs.rackspace.com/support/how-to/).

We have two short video tutorials that provide an overview for contributing new How-To articles and 
editing existing articles:

- [Treat Documentation Like Code-Contribute new content](https://www.youtube.com/watch?v=OrxozkL_0JQ)
- [Treat Documentation Like Code-Update existing comntent](https://www.youtube.com/watch?v=sJjsNnB-d7Y)

If you are a Racker, search the Rackspace University for the Treat Docs Like Code courses.

**Note**: If you already have a GitHub account, you can quickly edit an existing
article by clicking on the **Edit This Article** button on the left-hand side of
the page.

### Getting started with GitHub

To contribute to the How-To repository, you need a GitHub account. If you do not
have a GitHub account, you can sign up for one [https://github.com/join](https://github.com/join).

#### Create a fork of this repository

Before you create a new article or make edits to an existing one, create a
*fork* of the How-To repository.

1. In the top-right corner of the page, click the **Fork** button.

2. In the pop-up box, select your personal GitHub account.

Github creates a personal copy of the How-To repository in your GitHub account. You
can access your fork by going to the [GitHub home page](https://github.com) and
selecting **support-how-to** under **Your repositories**.

#### Keeping your fork up to date

Because your forked copy of the repository is not live, you need to periodically
update it with changes from the live repository. A status message above the
latest commit activity informs you whether your forked repository is current
with the master How-To repository. If the status says `This branch is X commits behind rackerlabs:master`,
update your repo by clicking the **Pull request** button to the right of the message.

**Note:** If you get a message that the rackerlabs:master branch is up-to-date
with commits from your master branch, click the **switching the base** link.

**WARNING:** To avoid any merge conflicts or difficulties when making a pull
request, always check that your copy of the fork is up to date with the master
repository.

### Creating and changing articles

The repository content directory contains a directory for each product. Each product
directory has multiple directories, one for each article, containing the content file
and any images for the content file.

Use the following instructions to create a new article, make edits to an existing
one, or suggest edits via an issue.

#### Create an article

**Important**: Before creating an article, make sure that a Rackspace Technology
team supports the product or service you describe. We cannot publish or
maintain articles without available subject matter experts to validate the content.

Use the following steps to create a new article within a product folder of the
**rackerlabs/support-how-to** repo:

1. Navigate to the root directory of your local copy of this repo by using the
   command line.
   
2. Create a branch for your new article.

   `git checkout -b my-new-server-article`

3. Create a new directory within ```/content/how-to/**product**``` that contains
   the initial ```.index.md``` by using the following command:

   `hugo new --kind support-bundle how-to/**product**/article-title`

   For example, the command, `hugo new --kind support-bundle how-to/cloud-servers/create-a-new-cloud-server`,
   creates a new directory, **create-a-new-cloud-server**, in the **cloud-server** product directory. The new 
   directory contains four files:
   
   - index.md
   - concept-based-article-template.md
   - task-based-article-template.md
   - troubleshooting-article-template.md
   
   You can use the information in the template files to create your new article in the **index.md** file. When
   you have everything you need from the template files, delete them. You need only the **index.md** content file 
   with the text of your article.
   
   **Note**: These templates are intended to be a starting point for a new article.
   You might not need every section included in each template, or you might have
   additional sections that aren't included in the template. If you have questions,
   contact us at [how-to@rackspace.com](mailto:how-to@rackspace.com).
   
   If your article has images, place the image files within the newly created article folder.

4. Write your article in Markdown in the **index.md** file. Find Markdown guidelines at
   [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
   Add your name in the *created\_by* line in the metadata. Also, update the *product* and *product_url* entries.
   This content is the same for all articles within a product, so you can copy the lines from any article for your product.
   
   **Note:** If your article includes images, add the image to your article
   directory and add a link to the image in your article. For example, assuming
   your image is named **Picture1.png**: {{<img src="Picture1.png" title="" alt="">}}

5. Save the file.

6. Create a pull request (PR). 

    a. Add your new content and image files, if any:
    
       `git add index.md`
       `git add Picture1.png`
       
    b. Commit the file:
    
       `git commit -m "Created new cloud server article"`
       
    c. Push the change:
    
       `git push upstream`
       
    d. In your web browser, navigate to **https://github.com/rackerlabs/support-how-to**. Log in if you are
       not already signed on.
       
    e. In the How-to repo, click **Pull Requests**.
    
    f. At the top, you should see a message with your branch name and a green **Compare & pull request** button. Click it.
    
    g. Click **Compare across forks**.
    
    h. `base-repository` should default to `rackerlabs/support-how-to` and `base` should default to `master`. Click the
       down arrow on `head-repository` and select your clone of the support-how-to repo. Click the down arrow on
       `compare` and select your branch. Click **Create new pull request**. Add any comments describing your change.
       Finally, click **Create pull request**.

7. After the build completes, preview it by clicking the **Details** link next
   to *Deploy preview ready!* in the **All Checks Passed** section of the GitHub PR.
   This action takes you to the staging location. Click **How-To** and then paste the
   permalink for your article (from the **index.md** metadata) at the end of the URL
   after `support/how-to`. For example:
   
   `https://deploy-preview-738--docs-support-how-to.netlify.app/support/how-to/create-a-new-cloud-server`
   
8. If you need to make any changes, modify the files in your local repo and push the changes up to the PR. Then,
   preview the article again.

9. When you're ready, request reviews of your PR from the Information Development team in the
   ``#how-to`` channel in Slack.

The Content Services team will review your PR. Depending on the review feedback,
you might need to make additional changes. The How-To editorial team merges
your pull request after we review your contribution.

#### Edit an article

Follow these steps to edit an existing article within a product folder of the
**rackerlabs/support-how-to** GitHub repository, not from your local clone:

1. Go to the [Rackspace How-To content folder](https://github.com/rackerlabs/support-how-to/tree/master/content/how-to)
   and click the product for which you want to edit an article.

2. Find the article you want to edit and click to open the **index.md** file within
   the article folder.

3. At the top of the article, click the pencil (**Edit this file**) icon.

4. Make any edits to the article directly through the GitHub website.

    **Note:** If you are using a desktop client or the command line and
    are forking or cloning the repository, be sure to make your changes in a new
    branch. Doing so ensures that you are producing a pull request (PR) rather
    than committing changes directly to the master.

5. At the bottom of the page, in the **Commit changes** section, add a title for your change.
   
6. Accept the default branch name or make a new one and click **Commit changes**.

7. `base` should default to `master` and `compare` should default to `{your-branch}`.

   If the settings are not correct, use the drop-down menus to select the appropriate
   settings. The fork menus might not be present.

8. Describe the changes that you made in a PR message.

   Use the following guidelines to create the PR message:

    - Provide a brief description of the change, starting with an imperative verb.
    For example, "Add a paragraph about... ."
    - If you make a complex edit, explain why you are making the edit in the
    larger box under **Commit changes**. For example, if you are changing the
    formatting of an article because you want an ordered list instead of an unordered one,
    say, "Switch list in middle of article to ordered to show clear progression
    of steps."

9. Click **Create pull request**.

10. After the build completes, preview it by clicking the **Details** link next
   to *Deploy preview ready!* in the **All Checks Passed** section of the GitHub PR.
   This action takes you to the staging location. Click **How-To** and then paste the
   permalink for your article (from the **index.md** metadata) at the end of the URL
   after `support/how-to`.

11. Request reviews of your PR from the Information Development team in the
    ``#how-to`` channel in Slack.

The Content Services team will review your PR. Depending on the review feedback,
you might need to make additional changes. The How-To editorial team
merges your pull request after we review your contribution.

#### Make a change to a PR

A member of the editorial team might ask you to update your PR. Use the following
steps to make an update to your PR from the GitHub GUI, not your local copy:

1. Go to the [Rackspace How-To content folder](https://github.com/rackerlabs/support-how-to/tree/master/content/how-to)
   and select the **Pull requests** tab.

2. Find and click your PR.

3. Click the **Files changed** tab.

4. Click the pencil icon next to the file that you want to change.

5. Make your change in the editor.

6. Provide a brief description of the change.

7. Click the **Commit directly to the `your-branch-name` branch** option, and
then click **Commit changes**.

8. Request reviews of your PR from the Information Development team in the
``#how-to`` channel in Slack.

The How-To team will comment on the PR if you need to make any more changes.

#### Request an article change

To request a change, create an issue by clicking **Issue** near the top of this
page. Describe the changes that you are requesting.

#### Retire an article

**Important**: Before you retire an article, search the repository to identify
any articles with links to the article you plan to retire. Either remove those
links or change the links to point to appropriate content.

For instructions on retiring an article, see [https://github.com/rackerlabs/support-how-to/blob/master/content/how-to/retired-articles/RETIRING-CONTENT/index.md](https://github.com/rackerlabs/support-how-to/blob/master/content/how-to/retired-articles/RETIRING-CONTENT/index.md).

#### Redirect an article

If you retire an article, you should redirect the old name to the *retired article* page. See [https://github.com/rackerlabs/support-how-to/blob/master/content/how-to/retired-articles/RETIRING-CONTENT/index.md](https://github.com/rackerlabs/support-how-to/blob/master/content/how-to/retired-articles/RETIRING-CONTENT/index.md)

To redirect an article to a different article (or to the same article with a new name), use the following instructions:

1. Either in your local How-To repository clone or in the GitHub GUI, edit **support-how-to/static/\_redirects**.

2. In the **Individual Redirects** section, add a `404` and a `301` line similar to the following example:

       /support/how-to/supported-features/  /how-to/cloudflare-supported-features/  404
       /how-to/cloudflare-supported-features/  /support/how-to/cloudflare-supported-features/  301

3. Commit the changes and either create a new PR or push to an existing PR with related changes.

After the pull request is ready, post a link in the #how-to slack channel for review and merge.

### Writing guidelines

Use the following general writing guidelines, which the
[style-guidelines.md](style-guidelines.md) document describes in detail:

- Use sentence-style capitalization for titles and headings.
- Use active voice.
- Use present tense.
- Write to the user by using second person and imperative mood.
- Write clear and consistent step text.
- Use consistent text formatting.
- Clarify pronouns such as *it*, *this*, *there*, and *that*.
- Clarify gerunds and participles.
- Write clear and consistent code examples.
- Use consistent terminology.

Following are some specific guidelines for How-To content:

- For the first-level headings in an article, use the H3 level (designated by ###).
Avoid using more than three levels of heading in an article (H3, H4, and H5).
If you need more than three levels, you should consider breaking your article
into two or more articles.

- When an article mainly provides step-by-step instructions for users to follow,
begin the title of the article with an imperative verb. For example: Install the
Cloud Backup agent on Windows.

- If a title contains a special character, such as a colon, enclose the title
with single quotation marks.

- When code includes placeholders, show them in camelCase and enclose them in
angle brackets. For example, `<hostName>`.

- To link to another article, use the following format:
`[<articleName>](/how-to/<articleName>)`. For example,
`[Rackspace Email and Hosted Exchange settings](/how-to/rackspace-email-and-hosted-exchange-settings)`.
Note the use of the leading slash.

- When creating complex lists, such as procedures with sublists, graphics, and
code examples, use the spacing guidelines at
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#lists.

### Support and feedback

If you find a problem, open a GitHub issue.

If you need additional assistance, contact us at [how-to@rackspace.com](mailto:how-to@rackspace.com).

### How-to products

| Product | Product URL |
| --- | --- |
| Account Management | account-management |
| Cloud Backup | cloud-backup |
| Cloud Block Storage | cloud-block-storage |
| Cloud Databases | cloud-databases |
| Cloud DNS | cloud-dns |
| Cloud Files | cloud-files |
| Cloud Images | cloud-images |
| Cloud Load Balancers | cloud-load-balancers |
| Cloud Networks | cloud-networks |
| Cloud Orchestration | cloud-orchestration |
| Cloud Queues | cloud-queues |
| Cloud Servers | cloud-servers |
| Dedicated Hosting | dedicated-hosting |
| Microsoft Exchange | exchange |
| General | general |
| Managed Operations | managed-operations |
| Office 365 | office-365 |
| RackConnect | rackconnect |
| Rackspace Autoscale | rackspace-auto-scale |
| Rackspace CDN | rackspace-cdn |
| Rackspace Email Archiving | rackspace-email-archiving |
| Rackspace Email | rackspace-email |
| Rackspace Intelligence | rackspace-intelligance |
| Rackspace Metrics | rackspace-metrics |
| Rackspace Monitoring | rackspace-monitoring |
| Rackspace Proactive Detection & Response | rackspace-pdr |
| Alert Logic Security Solutions | rms-alert-logic |
| Cloudflare with Rackspace Managed Services | rms-cloudflare |
| Microsoft Skype for Business | skype-for-business |
| VMware Server Virtualization | vmware-server-virtualization |

### Metadata sample

Following is a default example of article metadata:

```
---
permalink: cloud-database-instance-parameters
audit_date: '2021-01-31'
type: article
title: Cloud Database instance parameters
created_date: '2021-01-31'
created_by: John Q. Racker
last_modified_date:
last_modified_by:
product: Cloud Databases
product_url: cloud-database
---
```
