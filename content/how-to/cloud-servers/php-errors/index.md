---
permalink: php-errors/
audit_date:
title: 'PHP Errors'
type: article
created_date: '2021-08-10'
created_by: Alfonso Murillo
last_modified_date: '2021-08-13'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

# PHP Errors
This article shows how to obtain detailed information about PHP errors. As PHP is one day-to-day tool for many developers, the following suggestions are useful for being able to work more efficiently through identifying errors faster.

## Display errors
To display errors you need to enable error display in the `php.ini` file. Open the file and identify the `display_errors` and the `error_reporting` directives.

The `error_reporting` directive uses an integer value to define the error reporting level. For a list of constants for this directive and the errors they present refer to the [PHP official documentation for error predefined constants](https://www.php.net/manual/en/errorfunc.constants.php).

In case you do not want the `error_reporting` value changed for all files you can set it at runtime with the `error_reporting()` function.

The `display_errors` directive determines whether errors should be printed to the screen as an output or if they should be hidden from the user. The value `stderr` makes the error go to `stderr` instead of `stdout`.

In the `php.ini` file you would see something like this:
```
php_flag  display_errors        on
php_value error_reporting       2039
```
Although you can also set them at runtime with something like the following:
```
error_reporting(2039);
ini_set('display_errors', 'On');
```
For errors that happened during the startup sequence of PHP, you should activate the `display_startup_errors` directive, since this type of error does not show with `display_errors` only. On runtime you can set it with:
`ini_set('display_startup_errors', 1);`

For more errors configuration options you can go to the PHP documentation for a complete list [by clicking here](https://www.php.net/manual/en/errorfunc.configuration.php).

## Conclusions
Displaying PHP errors help to solve problems faster by obtaining descriptive information based on the configuration you placed. Please note that the outputs must be hidden before placing your site into production to avoid customers seeing the error logs.

