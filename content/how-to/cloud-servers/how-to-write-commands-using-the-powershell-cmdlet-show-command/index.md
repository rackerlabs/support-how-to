---
permalink: how-to-write-commands-using-the-powershell-cmdlet-show-command
audit_date: '2021-12-02'
title: 'How to Easily Write Commands Using the Powershell cmdlet Show-command'
type: article
created_date: '2021-12-02'
created_by: Ivan Espejel
last_modified_date: '2021-12-02'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

The complexity of the commands’ syntax can sometimes be difficult to understand. One feature of PowerShell v3 (and later, although not on non-Windows operating systems) is the Show-Command cmdlet.

If you’re having trouble getting a command’s syntax right, with all the spaces, dashes, commas, quotes, and whatnot, Show-Command will help you with it. It lets you specify the command name you’re struggling with and then graphically prompts you for the command’s parameters. As shown in Figure 1, each parameter set is on a separate Window, so there’s no chance of mixing and matching parameters across sets. Pick a tab and stick with it. 

**Note:** This won’t work on a server OS that doesn’t have a GUI installed.

{{<image src="powershell.png" alt="" title="">}}
*Figure 1. Show-Command uses a graphical prompt to complete command parameters.*

When you’re finished, you can either click `Run` to run the command or click `Copy` to put the completed command on the clipboard. Back in the shell, paste the command (right-click in the console, or press Ctrl-V in the ISE) to look at it. This is a great way to teach yourself the proper syntax, as shown in Figure 2, and you’ll get the proper syntax every time.

{{<image src="powershell2.png" alt="" title="">}}
*Figure 2. Show-Command produces the proper command-line syntax based on your entries in its dialog box.*
  
When you produce a command this way, you’ll always get the full-form command: full command name, full parameter names, all parameter names typed, and so on. It’s a great way to see the perfect, preferred, best-practice way of using PowerShell.

Unfortunately, Show-Command works only with single commands. When you start stringing together multiple commands, it can help you with only one at a time.

Use the Feedback tab to make any comments or ask questions. You can also [start a conversation with us](https://www.rackspace.com/contact).

#### Related Articles
- [Show-Command Powershell 7.2 - Microsoft Documentation](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/show-command?view=powershell-7.2)
