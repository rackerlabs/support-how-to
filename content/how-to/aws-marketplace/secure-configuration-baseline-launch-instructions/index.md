---
permalink: secure-configuration-baseline-launch-instructions/
audit_date: '2021-06-25'
title: Secure Configuration Baseline launch instructions
type: article
created_date: '2021-06-25'
created_by: Stephanie Fillmon
last_modified_by: Stephanie Fillmon
product: AWS Marketplace
product_url: aws-marketplace
---

This article describes how to launch the Secure Configuration Baseline
Amazon Machine Image (AMI).

1. Log in to the Amazon&reg; Web Services&reg;
   [console](https://aws.amazon.com/console/).

2. In the upper right-hand corner, locate your current region and select
   **US East (N Virginia) us east-1**.

   You should now see **N Virginia** as your region.

   **Note:** The region menu is between your username and the **Support** menu.

3. In the upper left-hand corner, click the **Services** menu.

4. In the **Compute** section, select **EC2**.

5. Scroll down to the **Launch instance** section and click **Launch Instance**
   and then **Launch Instance** in the dropdown menu.

6. In the search bar type "Rackspace Government Cloud Secure Configuration
   Baseline (RHEL7)".

7. In the left sidebar, click **AWS Marketplace** and then click **Select**
   next to the **Rackspace Government Cloud Secure Configuration Baseline
   (RHEL7)** option.

8. Confirm that you have selected the correct AMI and click **Continue**.

   {{<image src="rgs-ami-confirm-screen.png" alt="" title="">}}

9. Choose an instance type and then click **Configure Instance Details**.

10. Fill out the instance details to your specifications.

    {{<image src="instance-details.png" alt="" title="">}}

11. In the **Advanced Details** section, locate the **User data** setting and
    ensure that the **As text** option is selected. Then enter the following
    line of code in the text box:

        sudo chage -M -1 -E -1 ec2-user

    This ensures that the `ec2-user` doesn't expire until you explicitly set it
    to do so.

    {{<image src="advanced-details.png" alt="" title="">}}

12. Click **Add Storage** and add the appropriate amount of Elastic Block
    Store (EBS) storage volumes
    or instance store volumes. You can also edit the settings of the root
    volume.

    **Note**: You can add EBS volumes after launching the instance, but not
    instance store volumes.

13. Click **Add Tags** and add any appropriate tags for your instance. For more
    information about tagging, see
    [Tag your Amazon EC2 resources](https://docs.aws.amazon.com/console/ec2/tags).

14. Click **Configure Security Group**. If there are no security groups listed,
    create a new one by ensuring that the **Create a new security group**
    option is selected.

    You can leave the default text for **Security group name** and the
    **Description**.

    For the rule, select the following options:

      - **Type**: SSH
      - **Protocol**: TCP
      - **Port Range**: 22

    Click **Add Rule** to save the settings.

15. Click **Review and Launch** and review the details of the instance. Then
    click **Launch** to initiate the new instance.

    A dialog box appears that enables you to create a new shared key, select
    a current key, or proceed without a key. If you create a new key or select
    a current one, you must have that key located on your system to access the
    new instance.

    Proceeding without a key prevents your from accessing the server through
    SSH.

    After selecting your key settings, confirm by selecting the box below the
    key pair question and then click **Launch Instances**.

The new instance is launched and the **Launch Status** page displays with the
instance ID. Click the instance ID to view the status of your instance.

### Access your instance

On the instance status page, when the instance displays `2/2` under the
**Status check** header, you can
access it.

1. Click the checkmark next to the instance, which highlights the
   **Connect** option.

2. Click **Connect** to see a dialog box that describes how to connect to the
   server by using SSH.

   **Note:** If you did not set up an SSH key for the instance, you cannot access
   the instance by using SSH.

3. Copy the command and paste it into your preferred command-line tool
   to connect to the instance.

   The command should look similar to the following example command:

       ssh -i ".pem" ec2-user@ec2-34-231-110-100.compute-1.amazonaws.com
