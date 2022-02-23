# OutreachMobile
Connecting Outreach Volunteers to unhoused Encampments

02/23/2022

I ejected expo from this project and got the project to run in Android Studio on my Windows machine. So expo should not work if you try to use it. There are still lingering expo modules in the node modules folder that I need to delete (as well as yarn.lock), so I need to do a more thorough cleaning, but this basically works as of today, right now. Now I have to decided how to reconcile the main branch and the backend branch or if the backend branch should just be deleted. So I probably try and do a better expo cleaning to make sure there are no lingering packages and then figure out what to do with the backend branch. 

# Steps to run main branch or backend branch

1. Clone or fork respository
2. Configure Android SDK or Xcode for your machine
3. Run project

# List of things to do
1. Create initial collections for OutreachApp in MongoDB
2. Create splash screen in webapp
3. Finalize supplies category/subcategory list
4. Basic CRUD operations for Categories
5. Basic CRUD operations for Organization
6. Basic CRUD operations for User
7. Basic CRUD operations on Encampment
8. Basic CRUD operations on Requests
9. Create screen for  user flow
10. Create user signup screens
11. Have splashscreen integrated in frontend
12. Create screens for org admin/flow
13. Create screens for org admin -supplies
14. Create screens for adding camps
15. Create screens for volunteer flow

# Workflow
1. Eject Expo from main branch 
2. Reconcile main and backend branch
3. Create tiered user Oauth & Login structure
