// Program name: BhoomitsBookStore
// Program purpose: To learn about creating an ASP.NET Core Application using Model View Controller with Individual Account Authentication
// Program author: Bhoomit Kiritbhai Patel 
// Create Date: 2022-03-21 [ISO 8601]*
// author Student Number: 0780326

2022-03-21
Began the process of creating a default ASP.NET Core MVC application

1850
Make sure to select the Individual Account Authentication and Enable Razor runtime compilation

1900
Reviewed the code of default ASP.NET Core Mvc application with individual account authentication

1910
Ran the application and review the default output with default css layout

1930
Remove Identity User Option for SignIn.RequireConfirmedAccount = true

1945
Already uploaded to the Github Repo

2035
Now add two breakpoints to the HomeController.cs file for index and privacy page
Breakpoint stop the code and we have to continue the code for next execution

Its work successfully :)

2038
Step 2:
Add new Bootstrap to the application
Go to the bootswatch.com and select unique theme for the application

(: I choosed Sketchy THEME :)

2041
Downloaded the new bootstrap.css file for sketchy theme and replaced to the wwwroot/lib/bootstrap/dist/css and bootstrap.css

2042
Replaced the existing site.css file

2043
Change the link for the bootstrap in Views/Shared/_Layout.cshtml change the file name from bootstrap.min.css to the bootstrap.css which apply new sketchy theme

2046
Change the nav class from navbar-light to navbar-dark and bg-white to bg-primary in _Layout.cshtml
2048
Removed text-dark from the Line 23 and line 26

2049
Add additional property to footer and removed text-dark from the _LoginPartial.cshtml file

2052
Ran the application with the new theme Sketchy and it's look amazing :)

Step 3:

2057
Additional stylesheets and scripts added to the _Layout.cshtml file which provide in the tutorial

2058
Add new dropdown menu to the _Layout.cshtml file

New Theme Applied SLATE

2110
THEME SLATE

2111
Change name Dropdown to the Content Management

2112

PART 1.4
Add Project and Modify

2123
Add new three Class Library for the 
BhoomitsBooks.DataAccess
BhoomitsBooks.Models
BhoomitsBooks.Utility

2124
Now copy the Data folder from the Original and paste into the .DataAccess
Delete the original One

2125
Install the Microsoft.EntityFrameworkCore.Relational and Core.Sqlserver packages 

2126
Delete the Migration folder from the Original BhoomitsBook

2129
Install Identity.EntityFrameworkCore

2130
Modify the namespace to reflect the project

2135
Delete every class1.cs file from every class library

2140
Move Models folder into the BhoomitsBooks.Models and delete original

2145
Modify the Views/Shared/Error.cshtml file 

2149
Add Project refrence to the .DataAccess and .Models

2150
Rename the Models folder to the ViewModels

2159
Change the ErrorViewModels.cs namespace .Models.ViewModels

2200
Builded the project Oopssssss I got lots of error

Change some data into the Startup.cs for data acceess using BhoomitsBookStore.DataAccess.Data;

2215
Change Error.cshtml and Controller/HomeController.cs file to access the Models by using BhoomitsBookStore.Models.ViewModels.ErrorViewModel

2228
Build the project 
Yeeeeeeeeeeh!!!!! I got no error Builded successfully and Display the default application :)


2229
In Utility project create a static details class called SD.cs

2232
Change the properties of the SD class to the public static

2233
Add project refrence to the main project

2235
In the DataAccess project add project references to the Models and Utility

2236
Add customer area to areas

Yeees Completed :)

2239
Change the routes in startup.cs like the one outlined in the ScaffoldingReadMe.txt

2242
Move the HomeController.cs to the Area/Customer/Controller and delete Data and Models folder

2243
Edit the HomeController.cs to explicitly define that the controller is in the Customer Area

2248
Move Views/Home to the Cutomer/Views folder

2249
Ran the application 

It show me 
Welcome
Learn about building Web apps with ASP.NET Core. 
?????????????

2252
Copy ViewImports and ViewStart files and paste in the Customer/Views folder and add path

Now I Hope It will work perfectly fine

Ran the application

2253
Yeeeeee Yes It successfully ran :)

2255

Now Add Admin area

2256
Admin area added with some view files inside that :)


PART 2:


Section 2.1 Create the DB 

2118

Assignment 2.2

Checked the application and it is perfect working without any error :)

2122
Reviewed the appsetting.json file which is automatically set to the localDB server

2156
20220329015441_AddDefaultIdentityMigration
Migration Completed

2201
Sql Server Object explorer reviewed completly fine :)

2210
Add Category table to the Model and do migration and update

2227
Finally Categories table added to the SQL SOE :) I am happy :)

Section 2.2 Repository

2229
START 

2231
Folder Repository added to th .DataAccess and inside this folder add one more folder name IRepository

2232
Now update the .DataAccess csproj file for access the Repository 

2335
CategoryRepository and ICategoryRepository file create and code added to that file with some library

0013
All error finally solved I am Happy :)

0014
Now add one interface into the IRepository

0023
ISP_Call added to the repository IRepository

0024
Now add SP_Call class file to the Repository folder and lots of code
All error solved no error fine:)

0056
Now add one more interface Called IUnitOfWork in the IRepository folder

0057
Now add UnitOfWork file to the Repository folder and add some code for ISP_Call and Category

0115
UnitOfWork Code successfully add without any error
Build the application No error found I am happy :)

0130
Startup.cs file updated for IUnitOfWork and error solved

Session 2.3 Category CRUD

0132
Made controller for Admin are 
CategoryController.cs in Admin

0225
Make One Folder in View of Admin folder name Category
Add one view file name Index.cshtml file

Code will provide in next lecture

0228
Good Night :)

1453
Good Afternoon :)

1454
Now I added category code into the file and set the link for this file to the Dropdown menu to access directly from the home page

1516
Category link added to the _Layout.cshtml 

0117
Added _CreateAndBackToListButton to the shared folder

0131
Upsert.cshtml file updated 


0449
Finally Everything done application Assignment2 completed :)



*******************************************
*******************************************
**************PART 3:**********************
*******************************************
*******************************************


Date: 2022-04-02

0010
Build the project 

Part 3.1 : Cover Type CRUD


029
CoverType.cs file created in the Model folder
with the property name ID and Name

058
Add CoverTypeRepository Class
059
Add ICoverTypeRepository Interface
Add CoverType to UnitOfWork And IUnitOfWork

100
Now It's time to push CoverType to the Database (Create migration and update the DB)

20220402050328_AddCoverTypeToDb 
Now CoverType added to the Db and migration is completed at 105


0106
Now time to perform CRUD operations on Cover Type

0107
Now add Cover type to NavBar

0110
Now create Upser Index file in the Admin area

0115
Now make js for CoverType

Make one controller for the CoverType same as past Category

0134
Now check the application and run
Ran successfull without any error

0139
Added cover type
Updated Covertype
Deleted Covertype
Everything is Fine :)

0140
Part 3.1 finished

0141
Part 3.2 Product CRUD

0150
Now add one class name Product in the Models

0151
Add reference to the new Product piece to the database in the ApplicationDbContext.cs

0156
20220402055436_addProductToDb added to the database and migration is completed

Date 2022-04-04

2218
Now Update the product class so Title, ISBN and Author are required and create a new migration name addValidationToProduct and update the database

2224
20220405022117_addValidationToProduct added new validation to product successfully 

2248
Now add Controller for thr Product and modify the code to add enviornment to the Controller

2249
Now add one view model name ProductVM in the Model project

2250
Now time to add one package name Microsoft.AspNetCore.Mvc.ViewFetures 

2256
ProductVM.cs file modefied 

2330
Now Modify the ProductController the IActionResult Upsert calls to the ProductVM view model, include the using statements to the viewModels folder and Microsoft.AspNetCore.Mvc.Rendering

2331
Comment out the Upsert post method for temperary

2332
Modify the API call to include the Category and CoverType properties

0002
Now add index page for the Product page
Make one Js file for Product and change the table data to load all title,price,author,categoryName etc.....

0003
Now add product page link to the _Layout.cshtml file to access from the home page content manangement


0004
Now time to run the Application


0147
Now add Upsert for Product and add Index.cshtml file for the Product 

0148
I got lots of error but finally it is work perfectly fine :)

0149
Time to push the code into the Github.................



******************************************************************
******************************************************************
**********************PART 4**************************************
******************************************************************
******************************************************************

Date : 2022-04-19

0013
In the past I solved each and every error and I ran the code with the product data as well

0014
Lets check the code that is working perfectly fine or not ?

0142
Opppssss I tried too much but at the end I found the solution for the product data fetching

0143
I changed the foreign key for covertype and it solve the error boomm :)

0144
Now It's time to move for part 4 to show the product to the index home page of the bookstore

0145
Now don't forget to add the git changes:)

1441
20220419183736_lastValidationToProduct for adding the covertypeID foreign key :)

1514
I added extra link in the ValidationScriptPartial so 
So Whenever I tried to skip the image then it will show data but in that application should show a warning that please select an image for submit form

1515
Now I solved this error and now it is work perfectly fine 
