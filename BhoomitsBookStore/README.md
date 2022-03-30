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
