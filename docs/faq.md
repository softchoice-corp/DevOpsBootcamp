# Frequently Asked Questions

## Do I need to use the same email address for my Azure and GitHub Accounts

No, you can use different email addresses.

## How do I find my Azure Subscription ID?

- Method 1: from the cloud shell, run the command `az account show --query "id"`
- Method 2: from the Azure Portal, use the search box and type Subscriptions, view the list of your subscription(s) with their subscription ID

## Can I use my work email if signing up for a free Azure Account?

You should use a personal email when signing up for a free Azure Account, since someone else at your company could have already signed up and you may not be able to create another free account linked to the same organization.

## What permissions, roles, or rights do I need in my Azure Subscription or AAD Tenant?

If using your own free Azure Subscription, your account will be both a Global Admin in your Azure Active Directory (AAD) tenant (example: myemailaddress.onmicrosoft.com) and your account will also be an Owner Role (IAM) on the subscription.

If using an existing subscription, confirm you are a Global Admin in Azure Active Directory, and confirm you are an Owner of the subscription.
- Azure Active Directory Global Administrator: https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-assign-admin-roles
- Subscription Owner, also called Access Control or IAM, or Role Based Access Control (RBAC): https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal

## When I try to push my code I get a permission error

Make sure you're not trying to modify the softchoice-corp repo

In lab 1 you will create a new `MyDevOpsBootcamp` repo in your account by using the softchoice-corp template. You need to make sure that when you push the code you changed during the lab that you are executing the commits in your local repo otherwise you will receive a permission error. Remember, you do not have permission to make changes to the template itself (github.com/softchoice-corp/MyDevOpsBootcamp) only the repos you create in your account.
