# Frequently Asked Questions

## Do I need to use the same email address for my Azure and GitHub Accounts

No, you can use different email addresses.

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

## How do I fix errors when trying to use or launch Azure Cloud Shell?

- First, reset the cloud shell session using the restart icon on the Cloud Shell toolbar.
- Second, if you recieved an error about your cloud storage account (which is used for persistent storage in cloud shell), try to close cloud shell, locate the storage account in Resource Group "cloud-shell-storage-eastus" (substitute your region name), then delete the existing storage account. The storage account name will start with "cs", and is only supported in limited regions. When you launch Cloud Shell the next time, it will prompt you to create a storage account, allow it to create a new one, or use the advanced settings to point to a supported region or exisitng storage account: 
-- https://docs.microsoft.com/en-us/azure/cloud-shell/persisting-shell-storage#supported-storage-regions
- Third, if you are trying to use an unsupported Region (like any Canada regions), you may need to use an existing storage account in a supported region.

## How do I find my Azure Subscription ID?

- Method 1: from the cloud shell, run the command `az account show --query "id"`
- Method 2: from the Azure Portal, use the search box and type Subscriptions, view the list of your subscription(s) with their subscription ID

## How do I find my Service Principal Client ID or Client Secret?

When you create any Service Principal in Azure you will only be shown the generated Client Secret (password) one time. It can never be retrieved from Azure again. However, you can update the Service Principal with a new Client Secret. From Azure Cloud Shell run the command `az ad sp create-for-rbac --name GitHubActions` again. This will update your existing Service Principal with a new Client Secret. This command will also output your existing Client ID and Tenant ID. If you run this command you will need to create a new `AZURE_CREDENTIALS` secret in GitHub with the new Client Secret.

## How can I increase my vCPU quota?

Follow the Microsoft Docs guidance here: [https://docs.microsoft.com/en-us/azure/azure-portal/supportability/regional-quota-requests](https://docs.microsoft.com/en-us/azure/azure-portal/supportability/regional-quota-requests)
